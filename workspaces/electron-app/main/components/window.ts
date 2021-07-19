import { app, BrowserWindow, ipcMain, nativeImage } from "electron";
import * as path from "path";
import * as url from "url";
import { AbstractService } from "../services/abstract-service";
import { MultiplesService } from "../services/multiples-service";
import { Logger } from "../utils/logger";

declare const global: any;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export class Window {
  private _window: BrowserWindow | any;

  constructor() {
    this.createWindow();
    this.loadRenderer();
    this.registerService(MultiplesService);
  }

  private createWindow(): void {
    this._window = new BrowserWindow({
      width: 800,
      height: 600,
      backgroundColor: "#FFFFFF",
      // FIXME
      // icon: this.loadIcon(),
      webPreferences: {
        // Default behavior in Electron since 5, that
        // limits the powers granted to remote content
        // except in e2e test when those powers are required by Spectron
        nodeIntegration: global.gConfig.isNodeIntegration,
        // Isolate window context to protect against prototype pollution
        // except in e2e test when that access is required by Spectron
        contextIsolation: global.gConfig.isContextIsolation,
        // Ensure that JS values can't unsafely cross between worlds
        // when using contextIsolation
        worldSafeExecuteJavaScript: global.gConfig.isContextIsolation,
        // Disable the remote module to enhance security
        // except in e2e test when that access is required by Spectron
        enableRemoteModule: global.gConfig.isEnableRemoteModule,
        // Use a preload script to enhance security
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      },
    });
  }

  private loadIcon(): Electron.NativeImage {
    let iconObj = null;
    if (global.gConfig.isIconAvailable) {
      const iconPath = path.join(__dirname, "icons/icon.png");
      Logger.debug("Icon Path", iconPath);
      iconObj = nativeImage.createFromPath(iconPath);
      // Change dock icon on MacOS
      if (iconObj && process.platform === "darwin") {
        app.dock.setIcon(iconObj);
      }
    }
    return iconObj;
  }

  private loadRenderer(): void {
    if (global.gConfig.config_id === "development") {
      // Dev mode, take advantage of the live reload by loading local URL
      this.window.loadURL(`http://localhost:4200`);
    } else {
      // Else mode, we simply load angular bundle
      const indexPath = url.format({
        pathname: path.join(__dirname, `../renderer/angular_window/index.html`),
        protocol: "file:",
        slashes: true,
      });
      this.window.loadURL(indexPath);
    }

    if (global.gConfig.isOpenDevTools) {
      this.openDevTools();
    }

    // When the window is closed`
    this._window.on("closed", () => {
      // Remove IPC Main listeners
      ipcMain.removeAllListeners();
      // Delete current reference
      delete this._window;
    });
  }

  private openDevTools(): void {
    this._window.webContents.openDevTools();
    this._window.webContents.on("devtools-opened", () => {
      this._window.focus();
      setImmediate(() => {
        this._window.focus();
      });
    });
  }

  private registerService(AnyService: typeof AbstractService) {
    const service = new AnyService();
    ipcMain.on(service.receptionChannel(), async (event, ...args) => {
      // Handling input
      Logger.debug(`Received [${service.receptionChannel()}]`, args);
      const data = await service.process(...args);

      // Handling output
      if (service.sendingChannel()) {
        Logger.debug(`Sent [${service.sendingChannel()}]`, data);
        this._window.webContents.send(service.sendingChannel(), ...data);
      }
    });
  }

  public get window(): BrowserWindow | any {
    return this._window;
  }
}

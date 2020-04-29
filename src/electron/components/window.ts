import { app, BrowserWindow, ipcMain, nativeImage } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { AbstractService } from '../services/abstract-service';
import { MultiplesService } from '../services/multiples-service';

declare const __static: string;

export class Window {
  private _window: BrowserWindow | any;
  private _dev: boolean;
  private _e2e: boolean;

  constructor() {
    this._dev = process.env.NODE_ENV === 'development';
    this._e2e = process.env.X_NODE_ENV === 'e2e-test';

    this.createWindow();
    this.loadRenderer();
    this.registerService(MultiplesService);
  }

  private createWindow(): void {
    this._window = new BrowserWindow({
      width: 800,
      height: 600,
      backgroundColor: '#FFFFFF',
      icon: this._dev ? this.loadIcon() : null,
      webPreferences: {
        // Default behavior in Electron since 5, that
        // limits the powers granted to remote content
        // except in e2e test when those powers are required by Spectron
        nodeIntegration: this._e2e,
        // Isolate window context to protect against prototype pollution
        // except in e2e test when that access is required by Spectron
        contextIsolation: !this._e2e,
        // Disable the remote module to enhance security
        // except in e2e test when that access is required by Spectron
        enableRemoteModule: this._e2e,
        // Use a preload script to enhance security
        preload: path.join(app.getAppPath(), 'preload.js'),
      },
    });
  }

  private loadIcon(): Electron.NativeImage {
    const iconPath = path.join(__static, 'icons/icon.png');
    console.debug('Icon Path ', iconPath);
    const iconObj = nativeImage.createFromPath(iconPath);
    // Change dock icon on MacOS
    if (iconObj && process.platform === 'darwin') {
      app.dock.setIcon(iconObj);
    }
    return iconObj;
  }

  private loadRenderer(): void {
    if (this._dev) {
      // Dev mode, take advantage of the live reload by loading local URL
      this.window.loadURL(`http://localhost:4200`);
      this.openDevTools();
    } else {
      // Else mode, we simply load angular bundle
      const indexPath = url.format({
        pathname: path.join(__dirname, `index.html`),
        protocol: 'file:',
        slashes: true,
      });
      this.window.loadURL(indexPath);
    }

    // Delete current reference when the window is closed`
    this._window.on('closed', () => {
      delete this._window;
    });
  }

  private openDevTools(): void {
    this._window.webContents.openDevTools();
    this._window.webContents.on('devtools-opened', () => {
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
      console.log(`Received [${service.receptionChannel()}] : `, args);
      const data = await service.process(...args);

      // Handling output
      if (service.sendingChannel()) {
        console.log(`Sent [${service.sendingChannel()}] : `, data);
        this._window.webContents.send(service.sendingChannel(), ...data);
      }
    });
  }

  public get window(): BrowserWindow | any {
    return this._window;
  }
}

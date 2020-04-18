import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { AbstractService } from '../services/abstract-service';
import { MultiplesService } from '../services/multiples-service';

export class Window {
  private _window: BrowserWindow | any;
  private _dev: boolean;

  constructor() {
    const env = process.env.NODE_ENV;
    this._dev = env === 'development';

    this.createWindow();
    this.loadRender();
    this.registerService(MultiplesService);
  }

  private createWindow(): void {
    this._window = new BrowserWindow({
      width: 800,
      height: 600,
      backgroundColor: '#FFFFFF',
      webPreferences: {
        // Isolate window context to protect against prototype pollution
        contextIsolation: true,
        // Disable the remote module to enhance security
        enableRemoteModule: false,
        // Use a preload script to enhance security
        preload: path.join(app.getAppPath(), 'preload.js'),
      },
    });
  }

  private loadRender(): void {
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

    // Delete current reference when the window is closed
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

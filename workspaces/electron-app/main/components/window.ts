import { app, BrowserWindow, ipcMain, nativeImage } from 'electron';
import * as path from 'path';
import { AbstractService } from '../services/abstract-service';
import { MultiplesService } from '../services/multiples-service';
import { Logger } from '../utils/logger';

declare const global: Global;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export class Window {
	private _electronWindow: BrowserWindow | undefined;

	constructor() {
		this.createWindow();
		this.loadRenderer();
		this.registerService<number, number[]>(new MultiplesService());
	}

	private createWindow(): void {
		this._electronWindow = new BrowserWindow({
			width: 1280,
			height: 720,
			backgroundColor: '#FFFFFF',
			icon: this.loadIcon(),
			webPreferences: {
				// Default behavior in Electron since 5, that
				// limits the powers granted to remote content
				// except in e2e test when those powers are required by Spectron
				nodeIntegration: global.appConfig.isNodeIntegration,
				// Isolate window context to protect against prototype pollution
				// except in e2e test when that access is required by Spectron
				contextIsolation: global.appConfig.isContextIsolation,
				// Ensure that JS values can't unsafely cross between worlds
				// when using contextIsolation
				worldSafeExecuteJavaScript: global.appConfig.isContextIsolation,
				// Disable the remote module to enhance security
				// except in e2e test when that access is required by Spectron
				enableRemoteModule: global.appConfig.isEnableRemoteModule,
				// Use a preload script to enhance security
				preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
			},
		});
	}

	private loadIcon(): Electron.NativeImage | undefined {
		let iconObj = undefined;
		if (global.appConfig.isIconAvailable) {
			const iconPath = path.join(__dirname, 'icons/icon.png');
			Logger.debug('Icon Path', iconPath);
			iconObj = nativeImage.createFromPath(iconPath);
			// Change dock icon on MacOS
			if (iconObj && process.platform === 'darwin') {
				app.dock.setIcon(iconObj);
			}
		}
		return iconObj;
	}

	private loadRenderer(): void {
		if (global.appConfig.configId === 'development') {
			// Dev mode, take advantage of the live reload by loading local URL
			this.electronWindow.loadURL(`http://localhost:4200`);
		} else {
			// Else mode, we simply load angular bundle
			const indexPath = path.join(
				__dirname,
				'../renderer/angular_window/index.html'
			);
			this.electronWindow.loadURL(`file://${indexPath}`);
		}

		if (global.appConfig.isOpenDevTools) {
			this.openDevTools();
		}

		// When the window is closed`
		this._electronWindow.on('closed', () => {
			// Remove IPC Main listeners
			ipcMain.removeAllListeners();
			// Delete current reference
			delete this._electronWindow;
		});
	}

	private openDevTools(): void {
		this._electronWindow.webContents.openDevTools();
		this._electronWindow.webContents.on('devtools-opened', () => {
			this._electronWindow.focus();
			setImmediate(() => {
				this._electronWindow.focus();
			});
		});
	}

	private registerService<In, Out>(service: AbstractService<In, Out>) {
		ipcMain.on(
			service.receptionChannel(),
			async (event: Electron.IpcMainEvent, ...args: any[]) => {
				// Handling input
				const input = args[0];
				Logger.debug(`[${service.receptionChannel()}]  =====> `, input);
				const output: Out = await service.process(input);

				// Handling output
				if (service.sendingChannel()) {
					Logger.debug(`[${service.sendingChannel()}] =====> `, output);
					this._electronWindow.webContents.send(
						service.sendingChannel(),
						output
					);
				}
			}
		);
	}

	public get electronWindow(): BrowserWindow | undefined {
		return this._electronWindow;
	}
}

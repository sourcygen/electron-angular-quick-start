import { app, BrowserWindow, shell } from 'electron';
import { Window } from './window';

declare const global: Global;

export class App {
	private static _wrapper: Window;

	public static launch(): void {
		app.on('window-all-closed', App.quit);
		app.on('activate', App.start);
		app.whenReady().then(App.start);

		// Limit navigation and open external links in default browser
		app.on('web-contents-created', App.openExternalLinksInDefaultBrowser);
	}

	public static get electronWindow(): BrowserWindow | undefined {
		return this._wrapper ? this._wrapper.electronWindow : undefined;
	}

	private static start() {
		// On MacOS it is common to re-create a window from app even after all windows have been closed
		if (!App.electronWindow) {
			App._wrapper = new Window();
		}
	}

	private static quit() {
		// On MacOS it is common for applications to stay open until the user explicitly quits
		// But WebDriverIO Test Runner does not handle that behaviour yet
		if (
			process.platform !== 'darwin' ||
			global.appConfig.configId === 'e2e-test'
		) {
			app.quit();
		}
	}

	private static openExternalLinksInDefaultBrowser = (
		event: Electron.Event,
		contents: Electron.WebContents
	) => {
		// Disabling creation of new windows
		contents.setWindowOpenHandler((handler: Electron.HandlerDetails) => {
			// Telling the user platform to open this event's url in the default browser
			shell.openExternal(handler.url);

			// Blocking this event from loading in current app
			return { action: 'deny' };
		});

		// Limiting navigation
		contents.on(
			'will-navigate',
			(event: Electron.Event, navigationUrl: string) => {
				const parsedUrl = new URL(navigationUrl);
				// Allowing local navigation only
				if (parsedUrl.origin !== 'http://localhost:4200') {
					event.preventDefault();
				}
			}
		);
	};
}

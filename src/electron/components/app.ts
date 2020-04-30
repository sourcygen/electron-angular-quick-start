import { app, BrowserWindow, shell } from 'electron';
import { Window } from './window';

export class App {
  private static _wrapper: Window;

  public static launch() {
    app.on('window-all-closed', App.quit);
    app.on('activate', App.start);
    app.on('ready', App.start);

    // Fix warning by applying electron new default value for this property
    // Further details : https://github.com/electron/electron/issues/18397
    app.allowRendererProcessReuse = true;

    // Limit navigation and open external links in default browser
    app.on('web-contents-created', App.openExternalLinksInDefaultBrowser);
  }

  public static get window(): BrowserWindow | any {
    return this._wrapper ? this._wrapper.window : null;
  }

  private static start() {
    // On MacOS it is common to re-create a window from app even after all windows have been closed
    if (!App.window) {
      App._wrapper = new Window();
    }
  }

  private static quit() {
    // On MacOS it is common for applications to stay open until the user explicitly quits
    if (process.platform !== 'darwin') {
      app.quit();
    }
  }

  private static openExternalLinksInDefaultBrowser = (
    event: Electron.Event,
    contents: Electron.WebContents
  ) => {
    // Disabling creation of new windows
    contents.on(
      'new-window',
      (event: Electron.Event, navigationUrl: string) => {
        // Blocking this event from loading in current app
        event.preventDefault();
        // Telling the user platform to open this event's url in the default browser
        shell.openExternal(navigationUrl);
      }
    );

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

/*/ To secure user platform when running renderer process stuff,
// Node.JS and Electron APIs are only available in this script
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { WindowApi, WindowApiConst } from 'shared-lib';

// So we expose protected methods that allow the renderer process
// to use the ipcRenderer without exposing the entire object
const windowApi: WindowApi = {
	send: <In>(channel: string, input: In) => {
		if (WindowApiConst.SENDING_SAFE_CHANNELS.includes(channel)) {
			ipcRenderer.send(channel, input);
		}
	},
	receive: <Out>(channel: string, callback: (output: Out) => void) => {
		if (WindowApiConst.RECEIVING_SAFE_CHANNELS.includes(channel)) {
			// Deliberately strip event as it includes `sender`
			ipcRenderer.on(
				channel,
				(_event: IpcRendererEvent, ...parameters: any[]) =>
					callback(parameters[0])
			);
		}
	},
};

declare const window: Window;
if (process.env.X_NODE_ENV === 'e2e-test') {
	// Injecting windowApi directly
	window.api = windowApi;
} else {
	// ContextBridge API can only be used when contextIsolation is enabled
	// which is normally the case except in e2e test mode
	contextBridge.exposeInMainWorld('api', windowApi);
}*/

import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { WindowApiConst } from 'shared-lib';

contextBridge.exposeInMainWorld('api', {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
	send: <In>(channel: string, input: In) => {
		if (WindowApiConst.SENDING_SAFE_CHANNELS.includes(channel)) {
			ipcRenderer.send(channel, input);
		}
	},
	receive: <Out>(channel: string, callback: (output: Out) => void) => {
		// Deliberately strip event as it includes `sender`
		ipcRenderer.on(channel, (_event: IpcRendererEvent, ...parameters: any[]) =>
			callback(parameters[0])
		);
	},
	// we can also expose variables, not just functions
});

console.log('The preload script has been injected successfully.');

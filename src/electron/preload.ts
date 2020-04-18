// To secure user platform when running renderer process stuff,
// Node.JS and Electron APIs are only available in this script
import { contextBridge, ipcRenderer } from 'electron';
import { WindowApi, WindowApiConst } from 'shared';

// So we expose protected methods that allow the renderer process
// to use the ipcRenderer without exposing the entire object
const windowApi: WindowApi = {
  send: (channel: any, ...data: any) => {
    if (WindowApiConst.SENDING_SAFE_CHANNELS.includes(channel)) {
      ipcRenderer.send(channel, ...data);
    }
  },
  receive: (channel: string, func: (...data: any) => void) => {
    if (WindowApiConst.RECEIVING_SAFE_CHANNELS.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
};
contextBridge.exposeInMainWorld('api', windowApi);

console.log('The preload script has been injected successfully.');

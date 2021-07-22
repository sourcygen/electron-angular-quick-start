export class WindowApiConst {}
/** Channel used by the renderer process to send data to the main process */
WindowApiConst.MULTIPLES_INPUT = 'getMultiplesInput';
/** Channel used by the renderer process to receive data from the main process */
WindowApiConst.MULTIPLES_OUTPUT = 'getMultiplesOutput';
/** Whitelist of the safe channels to use when sending data to the main process */
WindowApiConst.SENDING_SAFE_CHANNELS = [WindowApiConst.MULTIPLES_INPUT];
/** Whitelist of the safe channels to use when receiving data from the main process */
WindowApiConst.RECEIVING_SAFE_CHANNELS = [WindowApiConst.MULTIPLES_OUTPUT];
//# sourceMappingURL=window-api-consts.js.map

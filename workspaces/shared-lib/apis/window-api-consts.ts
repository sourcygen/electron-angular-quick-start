export class WindowApiConst {
	/** Channel used by the renderer process to send data to the main process */
	public static readonly MULTIPLES_INPUT = 'getMultiplesInput';

	/** Channel used by the renderer process to receive data from the main process */
	public static readonly MULTIPLES_OUTPUT = 'getMultiplesOutput';

	/** Whitelist of the safe channels to use when sending data to the main process */
	public static readonly SENDING_SAFE_CHANNELS = [
		WindowApiConst.MULTIPLES_INPUT,
	];

	/** Whitelist of the safe channels to use when receiving data from the main process */
	public static readonly RECEIVING_SAFE_CHANNELS = [
		WindowApiConst.MULTIPLES_OUTPUT,
	];
}

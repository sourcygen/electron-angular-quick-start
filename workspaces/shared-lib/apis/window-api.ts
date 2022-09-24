export interface WindowApi {
	/**
	 * This method is used by the renderer process to receive data from the main process
	 * @param channel used by the renderer to receive data and by the main to send them
	 * @param func the callback function to execute when data are available
	 */
	receive<Out>(channel: string, callback: (output: Out) => void): void;

	/**
	 * This method is used by the renderer process to send data to the main process
	 * @param channel used by the renderer to send data and by the main to receive them
	 * @param data the data sent by the renderer process to the main process
	 */
	send<In>(channel: string, input: In): void;
}

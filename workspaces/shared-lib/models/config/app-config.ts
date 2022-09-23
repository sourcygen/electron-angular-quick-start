export interface AppConfig {
	/** The configuration identifier */
	configId: string;

	/** The main logger output file path */
	mainLogFile: string;

	/** The main logger output level */
	mainLogLevel: string;

	/** Tells if we should try to load app icon */
	isIconAvailable: boolean;

	/** Tells if `nodeIntegration` webPreference is enabled */
	isNodeIntegration: boolean;

	/** Tells if  `contextIsolation` and `worldSafeExecuteJavaScript` webPreferences are enabled */
	isContextIsolation: boolean;

	/** Tells if `isSandbox` webPreference is enabled */
	isSandbox: boolean;

	/** Tells if `isEnableRemoteModule` webPreference is enabled */
	isEnableRemoteModule: boolean;

	/** Tells if we should open dev tools */
	isOpenDevTools: boolean;
}

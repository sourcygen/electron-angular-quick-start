import { app } from 'electron';
import * as os from 'node:os';
import * as path from 'node:path';
import * as winston from 'winston';

declare const global: Global;

export class Logger {
	private static singleton: Logger;
	private _logger: winston.Logger;

	public static error(message: string, ...meta: any[]): void {
		Logger.initSingleton();
		Logger.singleton._logger.error(message, meta);
	}

	public static warn(message: string, ...meta: any[]): void {
		Logger.initSingleton();
		Logger.singleton._logger.warn(message, meta);
	}

	public static info(message: string, ...meta: any[]): void {
		Logger.initSingleton();
		Logger.singleton._logger.info(message, meta);
	}

	public static http(message: string, ...meta: any[]): void {
		Logger.initSingleton();
		Logger.singleton._logger.http(message, meta);
	}

	public static verbose(message: string, ...meta: any[]): void {
		Logger.initSingleton();
		Logger.singleton._logger.verbose(message, meta);
	}

	public static debug(message: string, ...meta: any[]): void {
		Logger.initSingleton();
		Logger.singleton._logger.debug(message, meta);
	}

	public static silly(message: string, ...meta: any[]): void {
		Logger.initSingleton();
		Logger.singleton._logger.silly(message, meta);
	}

	private static initSingleton(): void {
		if (!Logger.singleton) {
			Logger.singleton = new Logger();
		}
	}

	private constructor() {
		this._logger = winston.createLogger({
			level: 'debug',
			format: winston.format.json(),
			defaultMeta: { service: 'user-service' },
			transports: [
				new winston.transports.File({
					filename: this.getLogFilename(),
					level: global.appConfig.mainLogLevel,
					format: winston.format.combine(
						winston.format.timestamp(),
						this.fileFormat
					),
				}),
			],
		});

		// If we're not in production then log also to the `console` with the format:
		// `${info.timestamp} ${info.level}: ${info.message} JSON.stringify({ ...rest }) `
		if (global.appConfig.configId === 'development') {
			this._logger.add(
				new winston.transports.Console({
					stderrLevels: ['error', 'warn'],
					format: winston.format.combine(
						winston.format.timestamp(),
						this.consoleFormat
					),
				})
			);
		}
	}

	/**
	 * Returns log filename with standard path
	 * In production, returns absolute standard path depending on platform
	 */
	private getLogFilename() {
		let filename = global.appConfig.mainLogFile;
		if (global.appConfig.configId === 'production') {
			const appName = app.getName();
			if (process.platform == 'linux') {
				filename = `.config/${appName}/${filename}`;
			} else if (process.platform == 'darwin') {
				filename = `Library/Logs/${appName}/${filename}`;
			} else if (process.platform == 'win32') {
				filename = `AppData\\Roaming\\${appName}\\${filename}`;
			}
		}
		return path.join(os.homedir(), filename);
	}

	/**
	 * Custom winston file format
	 * Write JSON logs with given format :
	 * `${timestamp} ${level} : ${info.message} : ${meta})`
	 */
	private fileFormat = winston.format.printf(
		(data: winston.Logform.TransformableInfo) => {
			return JSON.stringify(this.prepareLogData(data));
		}
	);

	/**
	 * Custom winston console format
	 * Write logs with given format :
	 * `${timestamp} ${level} : ${info.message} : JSON.stringify({ ...meta }) `
	 */
	private consoleFormat = winston.format.printf(
		(data: winston.Logform.TransformableInfo) => {
			const preparedData = this.prepareLogData(data);
			return (
				`${preparedData.timestamp} ${preparedData.level} : ` +
				`${preparedData.message} : ${JSON.stringify(preparedData.meta)}`
			);
		}
	);

	private prepareLogData = (data: winston.Logform.TransformableInfo) => {
		const additionalData = { ...data };
		delete additionalData.timestamp;
		delete additionalData.level;
		delete additionalData.message;
		delete additionalData.service;
		return {
			timestamp: data.timestamp,
			level: data.level,
			message: data.message,
			meta: additionalData,
		};
	};
}

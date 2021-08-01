import * as path from 'path';
import { Application } from 'spectron';

export async function startApp(): Promise<Application> {
	// Path to local electron binary
	let electronPath = path.join(
		__dirname,
		'../../../node_modules/.bin/electron'
	);
	if (process.platform === 'win32') {
		electronPath += '.cmd';
	}

	// Init local packaged app
	const app = new Application({
		path: electronPath,
		args: ['.webpack/main/index.js'],
	});

	// Init local app and wait until window loaded
	await app.start();
	await app.client.waitUntilWindowLoaded();
	return app;
}

export async function stopApp(app: Application): Promise<void> {
	if (app && app.isRunning()) {
		// Wait 1 second and then stop local app
		await new Promise((resolve) => setTimeout(resolve, 1000));
		await app.stop();
	}
}

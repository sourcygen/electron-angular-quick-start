import * as path from 'path';
import { Application } from 'spectron';

describe('A simple test to verify a visible window is opened with a title', () => {
	// Init local app
	const app = new Application({
		path: path.join(__dirname, '../../../node_modules/.bin/electron'),
		args: [path.join(__dirname, '../../../.webpack/main/index.js')],
	});

	beforeAll(async () => {
		// Init local app and wait until window loaded
		await app.start();
		await app.client.waitUntilWindowLoaded();
	});

	afterAll(async () => {
		if (app && app.isRunning()) {
			// Wait 1 second and then stop local app
			await new Promise((resolve) => setTimeout(resolve, 1000));
			await app.stop();
		}
	});

	it('shows an initial window', async () => {
		// Checking there is one visible window
		expect(await app.browserWindow.isVisible()).toEqual(true);
		// Please note that getWindowCount() will return 2 if `dev tools` are opened.
		expect(await app.client.getWindowCount()).toEqual(1);
	});

	it('should have expected title', async () => {
		expect(await app.client.getTitle()).toEqual('ElectronAngularQuickStart');
	});
});

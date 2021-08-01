import { Application } from 'spectron';
import { startApp, stopApp } from './_hooks';

describe('A simple test to verify a visible window is opened with a title', () => {
	let app: Application;

	beforeAll(async () => {
		app = await startApp();
	});

	afterAll(async () => {
		await stopApp(app);
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

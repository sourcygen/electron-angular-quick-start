/*import MainPage from  './pageobjects/main.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await MainPage.open();
        /*await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');* /
    });
});* /

describe('application loading', () => {
	describe('App', () => {
		it('should launch the application', async () => {
			
			console.log('==>', await browser.getTitle());
			// expect(title).toEqual('Test');
		});

		// it('should pass args through to the launched application', async () => {
		//   // custom args are set in the wdio.conf.js file as they need to be set before WDIO starts
		//   const argv = await app.mainProcess.argv();
		//   expect(argv).toContain('--foo');
		//   expect(argv).toContain('--bar=baz');
		// });
	});
}); */

describe('A simple test to check if app window is opened, visible and with expected title', () => {
	describe('App should', () => {
		it('show an initial window', async () => {
			// Checking there is one visible window
			// expect(await browser.).toEqual(true);
			// Please note that getWindowHandles() will return 2 if `dev tools` is opened.
			const { length } = await browser.getWindowHandles();
			expect(length).toEqual(1);
		});

		it('have expected title', async () => {
			expect(await browser.getTitle()).toEqual('ElectronAngularQuickStart');
		});
	});
});

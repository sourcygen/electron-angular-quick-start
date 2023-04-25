describe('A simple test to check if app window is opened, visible and with expected title', () => {
	describe('App should', () => {
		it('show an initial window', async () => {
			// Checking there is one visible window
			// Please note that getWindowHandles() will return 2 if `dev tools` is opened.
			const { length } = await browser.getWindowHandles();
			expect(length).toEqual(1);
		});

		it('have expected title', async () => {
			expect(await browser.getTitle()).toEqual('ElectronAngularQuickStart');
		});
	});
});

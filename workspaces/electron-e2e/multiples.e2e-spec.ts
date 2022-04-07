import MultiplesPage from './pageobjects/multiples.page';

describe('A simple test to check if a given input matches with computed multiples', () => {
	describe('Multiples component should', () => {
		it('show up on startup', async () => {
			await expect(MultiplesPage.root).toBeDisplayed();
		});

		const number = Math.floor(Math.random() * 100) % 10;
		it(`display expected results on input (${number})`, async () => {
			await MultiplesPage.enterInput(number);
			const results = await MultiplesPage.results;
			for (let i = 0; i < results.length; i++) {
				const ntimes = 1 + i;
				const expected = `${number} * ${ntimes} = ${number * ntimes}`;
				expect(await results[i].getText()).toEqual(expected);
			}
		});
	});
});

import MultiplesPage from './pageobjects/multiples.page.ts';

describe('A simple test to check if a given input matches with computed multiples', () => {
	describe('Multiples component should', () => {
		it('show up on startup', async () => {
			await expect(MultiplesPage.root).toBeDisplayed();
		});

		const number = Math.floor(Math.random() * 100) % 10;
		it(`display expected results on input (${number})`, async () => {
			await MultiplesPage.enterInput(number);
			const results = await MultiplesPage.results;
			expect(results.length).toBe(10);
			for (const index of results.keys()) {
				const ntimes = 1 + index;
				const expected = `${number} * ${ntimes} = ${number * ntimes}`;
				expect(await results[index].getText()).toEqual(expected);
			}
		});
	});
});

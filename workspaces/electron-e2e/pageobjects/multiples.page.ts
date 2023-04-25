import AbstractPage from './page.ts';

class MultiplesPage extends AbstractPage {
	/**
	 * Selectors using getter methods
	 */
	public get root() {
		return $('#multiples');
	}

	public get input() {
		return $('#input');
	}

	public get results() {
		return $$('.results');
	}

	public get buttonSubmit() {
		return $('button[type="submit"]');
	}

	/**
	 * Wrapper method to interact with the page
	 */
	public async enterInput(number: number) {
		await this.input.setValue(number);
		await this.buttonSubmit.click();
	}
}

export default new MultiplesPage();

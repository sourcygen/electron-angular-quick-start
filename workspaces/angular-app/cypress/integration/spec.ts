describe('My First Test', () => {
	it('Visits the initial project page', () => {
		cy.visit('/');
		cy.contains('Welcome');
		cy.contains('electron-angular-quick-start app is running!');
	});
});

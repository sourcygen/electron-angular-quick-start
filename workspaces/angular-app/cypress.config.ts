import { defineConfig } from 'cypress';
import configCypress from './cypress/plugins/index';

export default defineConfig({
	videosFolder: 'cypress/videos',
	screenshotsFolder: 'cypress/screenshots',
	fixturesFolder: 'cypress/fixtures',
	screenshotOnRunFailure: false,
	video: false,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return configCypress(on, config);
		},
		baseUrl: 'http://localhost:4200',
	},
});

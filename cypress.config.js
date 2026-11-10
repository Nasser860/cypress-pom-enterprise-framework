/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/

/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    // FIX: Resolves the SSL alert 112 handshake issue on Heroku
    experimentalModifyObstructiveThirdPartyCode: true,
    
    // Shortcut path to ensure secure routing to the target application
    baseUrl: "https://the-internet.herokuapp.com",
    // FIX: Tells Cypress to explicitly record MP4 videos during headless runs
    video: true,
    // OPTIONAL CONFIGS:
    // This ensures screenshots are captured on failure (default is true)
    screenshotsFolder: "cypress/screenshots",
    // This deletes old screenshots from previous runs so your folder stays clean
    trashAssetsBeforeRuns: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha", // Where raw JSON files go
      overwrite: false,
      html: false,
      json: true
  }

  },
  });*/

  const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // 1. Core Target Website Configuration
    baseUrl: "https://automationexercise.com",
    failOnStatusCode: false,
    experimentalModifyObstructiveThirdPartyCode: true,

    // 2. NETWORK GUARDS: Extends limits to handle heavy site loading spikes
    pageLoadTimeout: 120000,       // Extends page load limits to 2 full minutes
    defaultCommandTimeout: 15000,  // Gives element lookups up to 15 seconds

    // 3. Reporting and Asset Management Configurations
    video: true,
    screenshotsFolder: "cypress/screenshots",
    trashAssetsBeforeRuns: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // 4. Mochawesome Report Integrations
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha", // Where raw JSON files go
      overwrite: false,
      html: false,
      json: true
    }
  } // Closes e2e block
}); // Closes defineConfig block



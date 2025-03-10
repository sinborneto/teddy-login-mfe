const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4201',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: false,
    chromeWebSecurity: false,
  }
});
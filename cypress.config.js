const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://web.test.tmob.com.br",
    retries: 2,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  },
  defaultCommandTimeout: 10000
})

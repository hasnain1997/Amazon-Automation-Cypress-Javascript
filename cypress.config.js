const { defineConfig } = require("cypress");

module.exports = defineConfig({

  "defaultCommandTimeout" : 6000,
  "chromeWebSecurity": false,
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/report"
  },
  e2e: {
    "baseUrl" : "https://www.amazon.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        setGlobal(value) {
          config.env.data = value
          return null;
        },

        getGlobal() {
          return config.env.data
        },
      })
    },
  },
});

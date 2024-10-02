const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 900,
    experimentalRunAllSpecs: true,
    projectId: "6df5sc",
    baseUrl: 'http://automationexercise.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
 
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "khrye7",
    experimentalRunAllSpecs: true,
    viewportWidth: 1600,
    viewportHeight: 900,
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

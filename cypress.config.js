const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://practice.expandtesting.com",
    env: {
      formPath: "/form-validation",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require('cypress')
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://www.saucedemo.com',
    specPattern: '**/*.feature'
  },
})

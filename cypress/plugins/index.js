const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {

on('file:preprocessor', cucumber());

};

// import './commands';

// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false;
// });
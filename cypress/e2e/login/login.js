import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const homePage = require('../../pages/homePage')
const inventoryPage = require('../../pages/inventoryPage')

Given('A user opens the page',()=>{
    cy.visit('/')
})

When('A user enter the username {string}', (username)=>{
    homePage.typeUsername(username)
})

Then('A user enter the password {string}', (password) =>{
    homePage.typePassword(password)
})

Then('User clicks on the login button', () =>{
    homePage.clickLogin()
})

Then('A user will be logged in', () =>{
   inventoryPage.elements.inventoryUrl().should('contains','/inventory.html')
})

Then('A user will be getting error message', () =>{
    homePage.elements.errorMessage().should('have.text','Epic sadface: Sorry, this user has been locked out.')
})




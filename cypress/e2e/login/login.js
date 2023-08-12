import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('A user opens the page',()=>{
    cy.visit('/')
})

When('A user enter the username {string}', (username)=>{
    cy.get('#user-name').type(username)
})

Then('A user enter the password {string}', (password) =>{
    cy.get('#password').type(password)
})

Then('User clicks on the login button', () =>{
    cy.get('#login-button').click()
})

Then('A user will be logged in', () =>{
    cy.url().should('contains','/inventory.html')
})




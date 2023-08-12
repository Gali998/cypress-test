import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('A user opens the page',()=>{
    cy.visit('/')
})

When('A user enter the username {string}', (username)=>{
    cy.get('#user-name').type(username)
})

And('A user enter the password {string}', (password) =>{
    cy.get('#password').type(password)
})


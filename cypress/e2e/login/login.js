import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('A user opens the page',()=>{
    cy.visit('/')
})


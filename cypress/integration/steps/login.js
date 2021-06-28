import { Given ,When,Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.d3a.io/login";

Given('User is on D3a login page', () => {
  cy.visit(url);
});


When('User enters username as {string}', (username) => {
  cy.get('#email').click().type(username)
  
});

When('User enters password as {string}', (password) => {
  cy.get('#password').click().type(password)
  
});

When('User click on Log in button', () => {
  cy.get('.button.button--accent').click()
  cy.get('.headline.header__page-title').should('have.text', 'Home');
});

Then('I verify that D3a home page is displayed', () => {
  cy.get('.headline.header__page-title').should('have.text', 'Home');
});

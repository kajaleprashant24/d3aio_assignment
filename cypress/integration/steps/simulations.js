import { Given ,When,Then } from "cypress-cucumber-preprocessor/steps";

const defaultName='default simulation'

When('User clicks on New simulation button',() => {
  cy.get('.saved-project__button--new-simulation').click();
  
});

Then('user verifies default configuration', () => {
  cy.get('#input-field-name').should('have.value',defaultName)
  // Todo add other fields
});

When('User clicks on Next button', () => { 
  cy.get('.settings-form__submit').click()
});

Then('User verifies Modeling screen is displayed', () => {
  cy.get('.headline.header__page-title').should('have.text', 'Modelling');
});

Then('User verify simulation is added under project', () => {
  cy.get('.saved-config--pct-width__title__name p').should('have.text', defaultName);
});

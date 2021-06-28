import { Given ,When,Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.d3a.io/projects";

Given('User is on D3a projects page', () => {
  cy.visit(url);
});


When('User clicks on New project button',() => {
  cy.get('.button--accent.button-icon').click();
  
});

When('User creates a project', () => {
  var projectName= name + Math.random().toString(36).substring(7);
    cy.get('@projectName').then(projectName => {
      cy.get('#input-field-name').type(projectName)
      cy.get('#textarea-field-nameTextArea').type('Test description for project' + projectName)
    });  
});

When('User click on Add button', () => { 
  cy.get('.library-name-modal .button.button--accent').click()
});

Then('User verify that project is created', () => {
  cy.get('@projectName').then(projectName => {
    cy.visit(url);  //refresh page to avoid flakyness
    cy.get('.saved-project__headline__name__text').eq(0).should('have.text',projectName)
  });
});

When('User is on D3a projects page', () => {
  cy.visit(url);
});

When('User clicks on project to expand', () => { 
  cy.get('@projectName').then(projectName => {
    cy.get('.saved-project__headline__name__text').contains(projectName).then( $el => {
      const classList = Array.from($el[0].classList); 
      var classname=".saved-project__headline__carat--closed"
      if (!classList.includes(classname) || !classList.includes(classname)){
        $el.click();

      }
    })
  });
  
});

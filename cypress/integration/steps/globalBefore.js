let PROJECT_NAME = '';
before(() => {
        var name= 'Test' + Math.random().toString(36).substring(7);
        cy.setLocalStorage('projectName', name); // set project name
        cy.saveLocalStorage()
});

beforeEach(() => {
        cy.restoreLocalStorage();
        cy.getLocalStorage('projectName').as('projectName'); 
        PROJECT_NAME = cy.get('@projectName');
});

/// <reference types = "cypress"/>

it('Test', () => {

    cy.visit('https://www.google.co.jp/')
    cy.get('#APjFqb').type('Testing{enter}')
    cy.wait(2000)
    //cy.get('input.gNO89b').first().click()
})
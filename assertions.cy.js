const { equal } = require("assert-plus")

it('Assertions', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('get').click() 

    cy.get('#query-btn')

        // Should assertions
        .should('contain','Button')
        .and('have.class','query-btn')
        .and('be.visible')
        .and('be.enabled')
        .invoke('attr','id')
        .and('equal','query-btn')

        // Explicit assertions (Expect)
    expect(true).to.be.true
    
    // Assert
    assert.equal(4,4, 'Equal')
    //assert.strictEqual(4,'4','Equal')
  })

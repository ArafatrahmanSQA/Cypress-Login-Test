/// <reference types = "cypress"/>

before(function () {
    cy.fixture('example.json').as('test_data');
  });
  
  it('Read files by Fixture', function () {
    cy.fixture('example.json').then((data) => {
      cy.log(data.name);
      cy.log(data.email);
    });
  
    // Access this.test_data inside the it block
    cy.log(this.test_data.name);
  });

  it('Read file by readfile()',function(){

    cy.readFile('./cypress/fixtures/example.json').then((data) =>{
        cy.log(data.name)

    })
  })

  it('Write file', function (){
    cy.writeFile('cypress/fixtures/sample.txt','Cypress Test\n')
    cy.writeFile('cypress/fixtures/sample.txt','Write file: Cypress Test',{flag: 'a+'})

  })
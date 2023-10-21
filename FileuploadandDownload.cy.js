/// <reference types = "cypress"/>
/// <reference types="cypress-downloadfile"/>

it ('File upload', function(){

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('TESTING.docx')
})

it ('File Download', function(){

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    
})
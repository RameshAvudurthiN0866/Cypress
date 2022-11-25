/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Access Website', () => {
  it('Launch sites',()=>{
    cy.visit('https://demoqa.com/browser-windows')
    cy.title().should('eq','ToolsQA')
  })
})

describe('Access Elements', () => {
  it('Click on Elements tab ',()=>{
    cy.contains('Elements').click();
  })
})

describe('Access Text Box', () => {
  it('Click on Text Box tab ',()=>{
    cy.contains('Text Box').click();
  })
})

describe('UserName', () => {
  it('Enter UserName ',()=>{
    cy.get('#userName').type('Ramesh').should('have.value','Ramesh');
  })
})

describe('User email', () => {
  it('Enter User email ',()=>{
    cy.get('#userEmail').type('ramesh@testmail.com').should('have.value','ramesh@testmail.com');
  })

  describe('Current Address', () => {
    it('Enter Current Address ',()=>{
      cy.get('#currentAddress').click();
      cy.get('#currentAddress').type('Hyderabad').should('have.value','Hyderabad');
    })
  })

  describe('Permanent Address', () => {
    it('Enter Permanent Address ',()=>{
      cy.get('#permanentAddress').click();
      cy.get('#permanentAddress').type('Karimnagar').should('have.value','Karimnagar');
    })
  })

  describe('Submit the form', () => {
    it('Click on submit button ',()=>{
      cy.get('.justify-content-end').click();
      cy.get('#submit').click();
    })
  })
  
})
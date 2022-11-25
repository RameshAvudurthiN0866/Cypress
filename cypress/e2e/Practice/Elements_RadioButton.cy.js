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

describe('Click on Radio Button', () => {
  it('Click on Click on  tab ',()=>{
    cy.contains('Radio Button').click();
  })
})


  describe('Select options', () => {
    it('Select options',()=>{
      cy.contains('Impressive').click();
      cy.contains('Yes').click();
      cy.contains('No').click();//No radio button is not working manually in website
    })
  })

 
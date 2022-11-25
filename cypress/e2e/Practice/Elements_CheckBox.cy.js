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

describe('Access Check Box', () => {
  it('Click on Check Box tab ',()=>{
    cy.contains('Check Box').click();
  })
})

  describe('expand all', () => {
    it('click expand all ',()=>{

      //cy.get("button[class*='rct-collapse'] svg",{timeout:10000}).click()
      //document.getElementsByClassName("rct-icon rct-icon-expand-close")[1];
        cy.get("button[class*='rct-option rct-option-expand-all'] svg",{timeout:10000}).click();
      //cy.contains('Home').click();
    })
  })

    describe('Select options', () => {
    it('Select options',()=>{
      cy.contains('Desktop').click();
      cy.contains('WorkSpace').click();
      cy.contains('Angular').click();
      cy.contains('Classified').click();
      cy.contains('Word File.doc').click();
    })
  })

 
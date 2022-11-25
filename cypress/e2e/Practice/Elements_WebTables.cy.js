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

describe('Click on Web Tables', () => {
  it('Web Tables  tab ',()=>{
    cy.contains('Web Tables').click();
  })
})


  describe('Add new record', () => {
    it('Click Add button',()=>{
      cy.contains('Add').click();
      cy.window().then((win) => {
        //cy.stub(win, "prompt").returns('Registration Form')
      cy.title().should('eq','Registration Form')
 
    })
  })

  
    // describe('Fill the details', () => {
    //   it('Enter firstname',()=>{
    //     cy.contains('Registration Form')
    //      cy.window().then((win) => {
    //        cy.stub(win, "prompt").returns('firstname')
    //        cy.get('#First Name').type('Ramesh').should('have.value','Ramesh') 
    //       cy.get('#Last Name').type('1').should('have.value','1') 
    //   })
    // })
  })

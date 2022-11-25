/// <reference types="Cypress" />

/* syntax
describe('testcase name', () => {
it('testcase step',() => {
cy.functions('URL/xpath/csspath').action function('').validation function('have.value','action function value')
})
})*/
describe('DemoQA Website', () => {
    it('Launch sites',()=>{
      cy.visit('https://demoqa.com/automation-practice-form')
    })

})

describe('Student Registration Form', () => {
  it('Interacting with text fields',()=>{
    cy.get('#firstName').type('Ramesh').should('have.value','Ramesh')  
    cy.get('#lastName').type('Avudurthi').should('have.value','Avudurthi')
  }) 
  
  it('Interacting with Email field',()=>{
  cy.get('#userEmail').type('rameshavudurthi@gmail.com').should('have.value','rameshavudurthi@gmail.com')  
  }) 

  it('Interacting with radio button',()=>{
   // cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
  })
  
  it('Interacting with Mobile field',()=>{
  cy.get('#userNumber').type('1234567898').should('have.value','1234567898') 
  })
  
  it('Interacting with Datepicker ', ()=>{ 
    cy.get('#dateOfBirthInput')
    .click()
    .get('.react-datepicker__day--011')
    .click()
    cy.get('#dateOfBirthInput')
    .should('have.value', '11 Nov 2022')
 })

    it('Interacting with Subjects field',()=>{
      //cy.get('[data-top="2704.53125"]').type('Maths').should('have.value','Maths').type('Cypress.io{enter}')
      cy.get('.subjects-auto-complete__value-container').type('Maths{enter}')
      .should('have.value','Maths')//.type('Cypress.io{enter}')
      
      //cy.get('[data-top="2704.53125"]').type('{enter}')
      })
    
    
    it('Interacting with checkboxes',()=>{
      cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click()
      cy.get('#hobbies-checkbox-1').click()
    }) 

    
    it('Interacting with Address text filed',()=>{
      cy.get('#currentAddress').type('Galaxy by Aurobindo Realty 3rd Floor, South Wing, Aurobindo Galaxy Survey Number No. 83/1, TSIIC Raidurg, Hyderabad, Telangana 500081')
    })
    
    it('Interacting with Dropdown State and city',()=>{
      cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type('NCR{enter}') 
    }) 
     
    it('Interacting with Dropdown State and city',()=>{
      cy.get('.css-1uccc91-singleValue').type('Delhi{enter}')  
    })


    it('Interacting with Submit Button',()=>{
      cy.get('#submit').click({force:true})
    }) 
    
})

    
    
    
   



  
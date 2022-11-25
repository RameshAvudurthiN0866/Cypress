describe('DemoQA Website', () => {
    it('Launch sites',()=>{
      cy.visit('https://demoqa.com/browser-windows')
    })

})

describe('access elements',() => 
{
    it('expand elements tree',() => 
    {
        cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-right').click
    })
})
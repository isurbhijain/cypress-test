it('Google Search',()=>{
    cy.visit("https://google.com/")
    cy.get('#APjFqb').type("Automation Testing {Enter}")

    // cy.contains('Google Search').click()
})
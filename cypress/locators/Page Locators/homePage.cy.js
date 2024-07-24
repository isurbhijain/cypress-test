class homePage{
clickOnHome(){
    cy.get("#nav-logo-sprites").click()
}
changeLanguage(lang){
    cy.get("#icp-nav-flyout").trigger("mouseover")
    cy.get(".nav-link > .nav-text > span").contains("HI").click()
}
verifyChangedLanguage(){
    cy.get("span.nav-line-2 div").then(function(ele){
        const langText = ele.text()
        expect(langText).to.equal("HI")
    })
}
clickOnSignIn(){
    cy.get("#nav-link-accountList").click()
    }
search(product){
    cy.get("#twotabsearchtextbox").type(product)
    cy.get("#nav-search-submit-button").click()
}
}
export default homePage
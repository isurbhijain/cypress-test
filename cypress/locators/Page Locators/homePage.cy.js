class homePage{
static webLocators = {homeButton:"#nav-logo-sprites",langButton : "#icp-nav-flyout",langHindi:".nav-link > .nav-text > span",
        langText:"span.nav-line-2 div",signinButton:"#nav-link-accountList",searchBox:"#twotabsearchtextbox",
        searchIcon:"#nav-search-submit-button"}
static clickOnHome(){
    cy.get(this.webLocators.homeButton).click()
}
static changeLanguage(lang){
    cy.get(this.webLocators.langButton).trigger("mouseover")
    cy.get(this.webLocators.langHindi).contains("HI").click()
}
static verifyChangedLanguage(){
    cy.get(this.webLocators.langText).then(function(ele){
        const langText = ele.text()
        expect(langText).to.equal("HI")
    })
}
static clickOnSignIn(){
    cy.get(this.webLocators.signinButton).click()
    }
static search(product){
    cy.get(this.webLocators.searchBox).type(product)
    cy.get(this.webLocators.searchIcon).click()
}
}
export default homePage
const webLocators = {homeButton:"#nav-logo-sprites",langButton : "#icp-nav-flyout",langHindi:".nav-link > .nav-text > span",
    langText:"span.nav-line-2 div",signinButton:"#nav-link-accountList",searchBox:"#twotabsearchtextbox",
    searchIcon:"#nav-search-submit-button"}
class homePage{
static clickOnHome(){
    cy.get(webLocators.homeButton).click()
}
static changeLanguage(lang){
    cy.get(webLocators.langButton).trigger("mouseover")
    cy.get(webLocators.langHindi).contains("HI").click()
}
static verifyChangedLanguage(){
    cy.get(webLocators.langText).then(function(ele){
        const langText = ele.text()
        expect(langText).to.equal("HI")
    })
}
static clickOnSignIn(){
    cy.get(webLocators.signinButton).click()
    }
static search(product){
    cy.get(webLocators.searchBox).type(product)
    cy.get(webLocators.searchIcon).click()
}
}
export default homePage
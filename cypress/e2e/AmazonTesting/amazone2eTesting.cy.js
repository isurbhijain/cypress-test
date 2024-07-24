import desiredProductPage from "../../locators/Page Locators/desiredProductPage.cy"
import homePage from "../../locators/Page Locators/homePage.cy"
import searchResultPage from "../../locators/Page Locators/searchResultPage.cy"
import signinPage from "../../locators/Page Locators/signinPage.cy"

//const homepage = new homePage()
//const signinpage = new signinPage()
//const searchresultpage = new searchResultPage()
//const desiredproductpage = new desiredProductPage()
describe("Amazon Testing",function(){
    before(function(){
        cy.fixture("dataAmazon.json").then(function(data){
            this.data = data
        })
    })
    it("Purchasing amazon product",function(){
        cy.visit(this.data.amazonURL)
        homePage.search(this.data.requiredProduct)
        searchResultPage.selectDesiredProduct(this.data.desiredBrand)
        desiredProductPage.addToCartSelectedProduct()
        homePage.clickOnHome()
        homePage.changeLanguage(this.data.newLanguage)
        homePage.clickOnHome()
        homePage.verifyChangedLanguage()
    })
})
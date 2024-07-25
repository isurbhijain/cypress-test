import desiredProductPage from "../../locators/Page Locators/desiredProductPage.cy"
import homePage from "../../locators/Page Locators/homePage.cy"
import searchResultPage from "../../locators/Page Locators/searchResultPage.cy"

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
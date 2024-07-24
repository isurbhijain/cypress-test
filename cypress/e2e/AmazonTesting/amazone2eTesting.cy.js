import desiredProductPage from "../../locators/Page Locators/desiredProductPage.cy"
import homePage from "../../locators/Page Locators/homePage.cy"
import searchResultPage from "../../locators/Page Locators/searchResultPage.cy"
import signinPage from "../../locators/Page Locators/signinPage.cy"

const homepage = new homePage()
const signinpage = new signinPage()
const searchresultpage = new searchResultPage()
const desiredproductpage = new desiredProductPage()
describe("Amazon Testing",function(){
    before(function(){
        cy.fixture("dataAmazon.json").then(function(data){
            this.data = data
        })
    })
    it("Purchasing amazon product",function(){
        cy.visit(this.data.amazonURL)
        homepage.search(this.data.requiredProduct)
        searchresultpage.selectDesiredProduct(this.data.desiredBrand)
        desiredproductpage.addToCartSelectedProduct()
        homepage.clickOnHome()
        homepage.changeLanguage(this.data.newLanguage)
        homepage.clickOnHome()
        homepage.verifyChangedLanguage()
    })
})
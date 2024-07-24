const webLocators = {addtocartButton:"#twisterPlusPriceSubtotalWWDesktop_feature_div + div > div > span",
                shownText:"h4.a-alert-heading:visible",closeIcon:"#attach-close_sideSheet-link"
}
class desiredProductPage{
static addToCartSelectedProduct(){
        cy.get(webLocators.addtocartButton).click()
        cy.get(webLocators.shownText).then(function(ele){
            const successText = ele.text()
            expect(successText).to.equal("Added to Cart")
        })
        cy.get(webLocators.closeIcon).click()
    }    
}
export default desiredProductPage
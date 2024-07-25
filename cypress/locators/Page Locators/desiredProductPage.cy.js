class desiredProductPage{
static webLocators = {addtocartButton:"#twisterPlusPriceSubtotalWWDesktop_feature_div + div > div > span",
        shownText:"h4.a-alert-heading:visible",closeIcon:"#attach-close_sideSheet-link"
}   
static addToCartSelectedProduct(){
        cy.get(this.webLocators.addtocartButton).click()
        cy.get(this.webLocators.shownText).then(function(ele){
            const successText = ele.text()
            expect(successText).to.equal("Added to Cart")
        })
        cy.get(this.webLocators.closeIcon).click()
    }    
}
export default desiredProductPage
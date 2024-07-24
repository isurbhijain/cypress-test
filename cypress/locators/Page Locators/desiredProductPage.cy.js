class desiredProductPage{
    addToCartSelectedProduct(){
        cy.get("#twisterPlusPriceSubtotalWWDesktop_feature_div + div > div > span").click()
        cy.get("h4.a-alert-heading:visible").then(function(ele){
            const successText = ele.text()
            expect(successText).to.equal("Added to Cart")
        })
        cy.get("#attach-close_sideSheet-link").click()
    }    
}
export default desiredProductPage
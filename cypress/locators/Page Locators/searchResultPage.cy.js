class searchResultPage{
static webLocators ={productTitle:"#productTitle"}    
static selectDesiredProduct(desiredProduct){
    cy.contains(desiredProduct).then(function(ele){
        cy.wrap(ele).invoke("removeAttr","target").click()
    })
    cy.get(this.webLocators.productTitle).then(function(title){
        const titleText = title.text()
        expect(titleText).to.include("iQOO")
    })
}
}
export default searchResultPage
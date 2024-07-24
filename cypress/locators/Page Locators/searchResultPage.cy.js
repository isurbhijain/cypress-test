class searchResultPage{
selectDesiredProduct(desiredProduct){
    cy.contains(desiredProduct).then(function(ele){
        const url = ele.prop("href")
        cy.wrap(ele).invoke("removeAttr","target").click()
        cy.get("#productTitle").then(function(title){
            const titleText = title.text()
            expect(titleText).to.include("iQOO")
        })
    })
}
}
export default searchResultPage
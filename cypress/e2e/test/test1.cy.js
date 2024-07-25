import HomePage from '../pageObject/HomePage'
import SearchResultPage from '../pageObject/SearchResultPage'
describe('My first test suit', function(){

    before(function(){
        cy.fixture("data.json").then(function(data){
            this.data= data
        })
    })
    it('My first testcase', function(){
        const homepage= new HomePage()
        const searchresultpage= new SearchResultPage()
        cy.visit("https://www.amazon.com/")
        homepage.getSearchbox().type('laptop')
        homepage.getSearchbutton().click()
   
        homepage.getProductName().each(($ele, index, $list)=>{
            const text = $ele.text();
            if(text.includes(this.data.productname)){
                cy.wrap($ele).click()
            }
        })

        
       searchresultpage.getAddToCartButton().click()
       homepage.getLogo().click()
        homepage.getSelectLanguage().trigger('mouseover')
      
        homepage.getSelectLanguageTooltip().should('be.visible')
        homepage.getSelectLanguageItem().each(($ele, index, $list)=>{
            const text= $ele.text();

            if(text.includes(this.data.language )) {
                cy.wrap($ele).click();
            }
            else(cy.log(text))
        })
        
       
        homepage.getSellLink().should('have.text',this.data.sell_in_new_lang)
       
        
    })
})
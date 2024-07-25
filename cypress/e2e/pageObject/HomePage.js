class HomePage
{
//Locators
 getSearchbox(){
    return cy.get('input[placeholder="Search Amazon"]');
 }
 getSearchbutton(){
   return cy.get('#nav-search-submit-button');
 }
getProductName(){
 return cy.get('.a-size-medium.a-color-base.a-text-normal')
}

getLogo(){
   return  cy.get('#nav-logo-sprites')
}

getSelectLanguage(){
   return cy.get('.icp-nav-link-inner')
}

getSelectLanguageTooltip(){
   return cy.get('#nav-flyout-icp>.nav-template.nav-flyout-content.nav-tpl-itemList')
}

getSelectLanguageItem(){
   return cy.get('#nav-flyout-icp>.nav-template.nav-flyout-content.nav-tpl-itemList>a')
}

getSellLink(){
   return cy.get('a[data-csa-c-content-id="nav_cs_sell"]')
}
}

export default HomePage
export default class AMZProductListPage {
  static locators = {
    product: ".a-size-mini > .a-link-normal > span",
    languageIcon: "#icp-nav-flyout",
    languageText: ".nav-link > .nav-text > span",
    allElement: ".hm-icon-label",
    cartIcon: "#nav-cart",
  };
  static selectProduct(name) {
    cy.get(this.locators.product)
      .contains(name)
      .then((el) => {
        cy.wrap(el).parent().invoke("removeAttr", "target").click();
      });
  }

  static changeLanguage(hindi) {
    cy.get(this.locators.languageIcon).trigger("mouseover");
    cy.get(this.locators.languageText).contains("HI").click();
    cy.get(this.locators.allElement).should("have.text", hindi);
  }

  static goToCart() {
    cy.get(this.locators.cartIcon).click();
  }
}

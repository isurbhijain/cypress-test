export default class DesktopPage {
  addSecondElement() {
    cy.get(".add-info :nth-child(2) .button-2").eq(1).click();
  }

  selectHDD() {
    cy.get("#product_attribute_16_3_6_19").check();
  }

  addToCart() {
    cy.get("#add-to-cart-button-16").click();
  }
}

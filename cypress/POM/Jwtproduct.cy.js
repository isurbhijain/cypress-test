export default class JWTproduct {
  clickProduct() {
    return cy
      .get(".card-body b")
      .eq(1)
      .then((ele) => {
        return ele.text();
      });
  }
  addtoCart() {
    cy.get(".card-body button:last-of-type").eq(1).click();
  }

  clickOnCart() {
    cy.get("[routerlink*='cart']").click();
  }
}

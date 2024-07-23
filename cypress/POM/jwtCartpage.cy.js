export default class JWTCartPage {
  clickCheckout() {
    cy.contains("Checkout").click();
  }

  selctCountry() {
    cy.get("[placeholder*='Country']").type("ind");
    cy.get(".ta-results button").each(($e1, index, $list) => {
      if ($e1.text() === " India") {
        cy.wrap($e1).click();
      }
    });
  }

  clickSubmit() {
    cy.get(".action__submit").click();
  }
}

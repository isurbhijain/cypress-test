import { VALUES } from "../constants/values";

class LoginPage {
  visit() {
    cy.visit(VALUES.baseURL);
  }

  clickLoginLink() {
    cy.get(".ico-login").click();
  }

  enterDetails(email, pass) {
    cy.get("#Email").type(email);
    cy.get("#Password").type(pass);
    cy.get("form > .buttons > .button-1").click();
  }

  enterEmail(email) {
    cy.get("#Email").type(email);
  }
  enterPassword(pass) {
    cy.get("#Password").type(pass);
  }

  clickLoginButton() {
    cy.get("form > .buttons > .button-1").click();
  }

  assertLogin(asText) {
    cy.get(".ico-cart > .cart-label")
      .invoke("text")
      .then((text) => {
        cy.log(text);
        expect(text).to.eql(asText);
      });
  }
}

export default LoginPage;

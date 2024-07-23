import { VALUES } from "../constants/values";

export default class RegisterPage {
  visit() {
    cy.visit(VALUES.baseURL);
  }

  enterDetails(fn, ln, em, ps) {
    cy.get("#gender-male").click();
    cy.get("#FirstName").type(fn);
    cy.get("#LastName").type(ln);
    cy.get("#Email").type(em);
    cy.get("#Password").type(ps);
    cy.get("#ConfirmPassword").type(ps);
    cy.get("#register-button").click();
  }

  clickRegisterLink() {
    cy.get(".ico-register").click();
  }

  selectGender() {
    cy.get("#gender-male").click();
  }

  enetrFirstName(fn) {
    cy.get("#FirstName").type(fn);
  }

  enterLastname(ln) {
    cy.get("#LastName").type(ln);
  }

  enterEmail(em) {
    cy.get("#Email").type(em);
  }

  enterPassword(ps) {
    cy.get("#Password").type(ps);
    cy.get("#ConfirmPassword").type(ps);
  }

  clickRegister() {
    cy.get("#register-button").click();
  }
}

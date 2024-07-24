// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import "cypress-iframe";
import LoginPage from "../locators/DemoWebshopLocators/loginpage.cy.js";
import LogoutPage from "../locators/DemoWebshopLocators/logoutpage.cy.js";
import RegisterPage from "../locators/DemoWebshopLocators/registerpage.cy.js";

var result;
before("fub", () => {
  cy.fixture("example").then((data) => {
    result = data;
  });
});

Cypress.Commands.add("login", (email, password) => {
  const lp = new LoginPage();
  lp.visit();
  lp.clickLoginLink();
  lp.enterEmail(email);
  lp.enterPassword(password);
  lp.clickLoginButton();
});

Cypress.Commands.add("logout", () => {
  const lop = new LogoutPage();
  lop.clickLogout();
  lop.assertLogout(result.logoutAssert);
});

Cypress.Commands.add("register", () => {
  const rp = new RegisterPage();

  rp.visit();
  rp.clickRegisterLink();
  rp.selectGender();
  rp.enetrFirstName(result.fname);
  rp.enterLastname(result.lname);
  rp.enterEmail(result.email);
  rp.enterPassword(result.password);
  rp.clickRegister();
});

Cypress.Commands.add("viewCart", () => {
  cy.get(".ico-cart > .cart-label").click();
});

Cypress.Commands.add("LoginApi", () => {
  cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
    userEmail: "johndoe271@gmail.com",
    userPassword: "Sanju@123",
  }).then((res) => {
    expect(res.status).to.eq(200);
    Cypress.env("token", res.body.token);
  });
});

Cypress.Commands.add("launch", () => {
  cy.visit("https://www.amazon.in/");
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AMZHomePage from "../../../POM/amzHome.cy";
import AMZProductListPage from "../../../POM/amzProductsList.cy";
import AMZProductPage from "../../../POM/amzProduct.cy";
import AMZCartPage from "../../../POM/amzCart.cy";

const hp = new AMZHomePage();
const plp = new AMZProductListPage();
const pp = new AMZProductPage();
const cp = new AMZCartPage();

var res;

before("data", () => {
  cy.fixture("example").then((data) => {
    res = data;
  });
});

Given("launch the website", () => {
  cy.launch();
});

When("search for product", () => {
  hp.enterSearchBar(res.searchText);
  hp.selectTheProduct();
});

When("select the product", () => {
  plp.selectProduct(res.productName);
  pp.assertProduct(res.productName);
});

When("Add to cart", () => {
  pp.addToCart();
});

Then("assert the product", () => {
  pp.checkProduct();
  cy.go("back");
  cy.go("back");
  plp.goToCart();
  cp.getCartText();
});

Then("change language", () => {
  plp.changeLanguage(res.languageAssert);
});

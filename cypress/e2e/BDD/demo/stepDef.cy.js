import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { VALUES } from "../../../constants/values";
import LoginPage from "../../../POM/loginpage.cy";

const lp = new LoginPage();
Given("the page is launched", () => {
  lp.visit();
  lp.clickLoginLink();
});

When("entering credentials", (dataTable) => {
  lp.enterEmail(dataTable.rawTable[1][0]);
  //   lp.enterEmail(VALUES.email);
  //   lp.enterPassword(VALUES.password);
  lp.enterPassword(dataTable.rawTable[1][1]);
  lp.clickLoginButton();
});

Then("home page is displayed", () => {
  lp.assertLogin(VALUES.loginAssert);
});

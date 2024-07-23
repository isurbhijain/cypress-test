import JWTCartPage from "../POM/jwtCartpage.cy";
import JWTexcel from "../POM/jwtExcelPage.cy";
import JWTproduct from "../POM/Jwtproduct.cy";
const neatCsv = require("neat-csv");
let productName, a;
describe("Jwt", () => {
  it("login api", () => {
    cy.LoginApi();
    cy.visit("https://rahulshettyacademy.com/client", {
      onBeforeLoad: (window) => {
        window.localStorage.setItem("token", Cypress.env("token"));
      },
    });
    const jp = new JWTproduct();
    const jc = new JWTCartPage();
    const je = new JWTexcel();

    jp.clickProduct().then((pn) => {
      productName = pn;
    });

    jp.addtoCart();
    jp.clickOnCart();

    jc.clickCheckout();
    jc.selctCountry();
    jc.clickSubmit();

    cy.wait(2000);

    je.clickCSVButton();

    cy.readFile(
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/order-invoice_johndoe271.csv"
    ).then(async (text) => {
      const csv = await neatCsv(text);
      console.log(csv);
      const actualProductCSV = csv[0]["Product Name"];
      console.log(actualProductCSV);
      expect(productName).to.equal(actualProductCSV);
    });
  });
});

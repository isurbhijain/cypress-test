import JWTCartPage from "../POM/jwtCartpage.cy";
import JWTexcel from "../POM/jwtExcelPage.cy";
import JWTproduct from "../POM/Jwtproduct.cy";

let productName;
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

    jp.clickProduct();
    jp.addtoCart();
    jp.clickOnCart();

    // cy.get(".card-body b")
    //   .eq(1)
    //   .then(function (ele) {
    //     productName = ele.text();
    //   });

    // cy.get(".card-body button:last-of-type").eq(1).click();

    // cy.get("[routerlink*='cart']").click();

    jc.clickCheckout();
    jc.selctCountry();
    jc.clickSubmit();

    // cy.contains("Checkout").click();

    // cy.get("[placeholder*='Country']").type("ind");

    // cy.get(".ta-results button").each(($e1, index, $list) => {
    //   if ($e1.text() === " India") {
    //     cy.wrap($e1).click();
    //   }
    // });

    // cy.get(".action__submit").click();

    cy.wait(2000);
    je.clickExcelButton();

    // cy.get("button.btn-primary").contains("Excel").click();

    const filePath =
      Cypress.config("fileServerFolder") +
      "/cypress/downloads/order-invoice_johndoe271.xlsx";
    cy.task("excelToJsonConverter", filePath).then((res) => {
      console.log(res);
      expect(productName).to.equal(res.data[1].B);
    });

    cy.readFile(filePath).then((text) => {
      expect(text).to.include(productName);
    });
  });
});

import AMZCartPage from "../POM/amzCart.cy";
import AMZHomePage from "../POM/amzHome.cy";
import AMZProductListPage from "../POM/amzProductsList.cy";
import AMZProductPage from "../POM/amzProduct.cy";

const hp = new AMZHomePage();
const plp = new AMZProductListPage();
const pp = new AMZProductPage();
const cp = new AMZCartPage();

describe("Amazon Test", () => {
  it("Test 1", () => {
    cy.launch();
    hp.enterSearchBar("OnePlus");
    hp.selectTheProduct();
    plp.selectProduct("12R");
    pp.assertProduct("OnePlus 12R");
    pp.addToCart();
    pp.checkProduct();
    cy.go("back");
    cy.go("back");
    plp.goToCart();
    cp.getCartText();
    plp.changeLanguage("सभी");
  });
});

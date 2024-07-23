import AMZHomePage from "../../locators/AmazonLocators/amzHome.cy";
import AMZProductListPage from "../../locators/AmazonLocators/amzProductsList.cy";
import AMZProductPage from "../../locators/AmazonLocators/amzProduct.cy";
import AMZCartPage from "../../locators/AmazonLocators/amzCart.cy";

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
    // pp.checkProduct();
    cy.go("back");
    cy.go("back");
    plp.goToCart();
    cp.getCartText();
    plp.changeLanguage("सभी");
  });
});

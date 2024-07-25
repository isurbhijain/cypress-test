import AMZHomePage from "../../locators/AmazonLocators/amzHome.cy";
import AMZProductListPage from "../../locators/AmazonLocators/amzProductsList.cy";
import AMZProductPage from "../../locators/AmazonLocators/amzProduct.cy";
import AMZCartPage from "../../locators/AmazonLocators/amzCart.cy";

describe("Amazon Test", () => {
  var res;
  before("fub", () => {
    cy.fixture("example").then((data) => {
      res = data;
    });
  });

  it("Test 1", () => {
    cy.launch();
    AMZHomePage.enterSearchBar(res.searchText);
    AMZHomePage.selectTheProduct();
    AMZProductListPage.selectProduct(res.productName);
    AMZProductPage.assertProduct(res.productName);
    AMZProductPage.addToCart();
    cy.go(-3);
    AMZProductListPage.goToCart();
    AMZCartPage.getCartText();
    AMZProductListPage.changeLanguage(res.languageAssert);
  });
});

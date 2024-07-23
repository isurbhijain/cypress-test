import HomePage from "../POM/homepage.cy";
import CartPage from "../POM/cartpage.cy";
import { VALUES } from "../constants/values";
import NotebookPage from "../POM/notebookpage.cy";
import AddressPage from "../POM/addresspage.cy";
import ConfirmPage from "../POM/confirmpage.cy";

describe("demowebshop", () => {
  before("Register", () => {
    cy.register();
  });
  beforeEach("launch", () => {
    cy.login(VALUES.email, VALUES.password);
  });

  it("addProduct", () => {
    const hp = new HomePage();
    const np = new NotebookPage();
    const cp = new CartPage();
    const ap = new AddressPage();
    const cnfp = new ConfirmPage();

    hp.hoverComputer();
    hp.selectNotebooks();
    np.addTocart();
    cy.viewCart();
    cp.assertCartText();

    cp.acceptTerms();
    cp.proceedCheckout();

    ap.slectNewAddress();

    ap.selectCountry();
    ap.selectCity(VALUES.city);
    ap.selectAddress(VALUES.address);
    ap.selectPostalCode(VALUES.zipcode);
    ap.selectPhone(VALUES.phone);
    ap.clickContinue();
    ap.clickShippingContinue();
    ap.clickShipMethodContinue();
    ap.clickPaymentMethodContinue();
    ap.clickPaymentInfoContinue();
    ap.clickConfirm();

    cnfp.assertConfirm();
    cnfp.clickContinue();
  });
});

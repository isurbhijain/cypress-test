export default class AddressPage {
  cnfAddress(city, address, pcode, pnum) {
    cy.get("#BillingNewAddress_CountryId").select("India");
    cy.get("#BillingNewAddress_City").type(city);
    cy.get("#BillingNewAddress_Address1").type(address);
    cy.get("#BillingNewAddress_ZipPostalCode").type(pcode);
    cy.get("#BillingNewAddress_PhoneNumber").type(pnum);
    cy.get("#billing-buttons-container > .button-1").click();
    cy.get("#shipping-buttons-container > .button-1").click();
    cy.get("#shipping-method-buttons-container > .button-1").click();
    cy.get("#payment-method-buttons-container > .button-1").click();
    cy.get("#payment-info-buttons-container > .button-1").click();
    cy.get("#confirm-order-buttons-container > .button-1").click();
  }
  slectNewAddress() {
    cy.get("#billing-address-select").select("New Address");
  }
  selectCountry() {
    cy.get("#BillingNewAddress_CountryId").select("India");
  }

  selectCity(city) {
    cy.get("#BillingNewAddress_City").type(city);
  }
  selectAddress(address) {
    cy.get("#BillingNewAddress_Address1").type(address);
  }
  selectPostalCode(pcode) {
    cy.get("#BillingNewAddress_ZipPostalCode").type(pcode);
  }
  selectPhone(pnum) {
    cy.get("#BillingNewAddress_PhoneNumber").type(pnum);
  }

  clickContinue() {
    cy.get("#billing-buttons-container > .button-1").click();
  }

  clickShippingContinue() {
    cy.get("#shipping-buttons-container > .button-1").click();
  }

  clickShipMethodContinue() {
    cy.get("#shipping-method-buttons-container > .button-1").click();
  }

  clickPaymentMethodContinue() {
    cy.get("#payment-method-buttons-container > .button-1").click();
  }

  clickPaymentInfoContinue() {
    cy.get("#payment-info-buttons-container > .button-1").click();
  }

  clickConfirm() {
    cy.get("#confirm-order-buttons-container > .button-1").click();
  }
}

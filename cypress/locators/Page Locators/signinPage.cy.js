class signinPage{
static webLocators ={emailBox:"#ap_email",passwordBox:"#ap_password",
        continueButton:"#continue",signinSubmit:"#signInSubmit"
}    
enterEmail(email){
    cy.get(this.webLocators.emailBox).type(email)
    cy.get(this.webLocators.continueButton).click()
    }
enterPassword(password){
    cy.get(this.webLocators.passwordBox).type(password)
    cy.get(this.webLocators.signinSubmit).click()
    }
}
export default signinPage
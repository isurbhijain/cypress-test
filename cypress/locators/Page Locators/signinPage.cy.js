const webLocators ={emailBox:"#ap_email",passwordBox:"#ap_password",
                continueButton:"#continue",signinSubmit:"#signInSubmit"
}
class signinPage{
enterEmail(email){
    cy.get(webLocators.emailBox).type(email)
    cy.get(webLocators.continueButton).click()
    }
enterPassword(password){
    cy.get(webLocators.passwordBox).type(password)
    cy.get(webLocators.signinSubmit).click()
    }
}
export default signinPage
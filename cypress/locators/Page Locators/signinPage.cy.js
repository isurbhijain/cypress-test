class signinPage{
enterEmail(email){
    cy.get("#ap_email").type(email)
    cy.get("#continue").click()
    }
enterPassword(password){
    cy.get("#ap_password").type(password)
    cy.get("#signInSubmit").click()
    }
}
export default signinPage
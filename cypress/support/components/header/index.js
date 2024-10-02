import { el } from "./elements"

const Header  = {

goToSignup: function() {
            cy.get(el.signupButton).click()
            cy.get( el.signupForm).should('have.text', 'New User Signup!')
},

loggedUserShouldHave: function(txt) {
    cy.get(el.loggedUserIcon)
        .parent()
            .should('have.text', txt)
}
}

export default Header
import { el } from "./elements"

const Header  = {

goToSignup: function() {
            cy.get(el.signupButton).click()
            cy.get( el.signupForm).should('have.text', 'New User Signup!')
}

}

export default Header
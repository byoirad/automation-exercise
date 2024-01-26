import { el } from "./elements"

const Header = {
    
    goToSignup: function(txt){
        cy.get(el.signupButton).click()
        cy.get(el.signupButtonForm).should('be.visible')
    },

    loggedUserShouldHave: function(txt){
        cy.get(el.loggedUserIcon)
            .parent()
                .should('have.text', txt)
    }
}

export default Header
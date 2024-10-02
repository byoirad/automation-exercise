import Header from "../support/components/header"
import HomePage from "../support/pages/home"
import SignupPage from "../support/pages/signup"

describe('Dado que o usuário está na página de login', function () {

    beforeEach(function () {
        cy.fixture('data').then(function (user) {
            this.user = user
        })
    })

    context('Quando o usuário preenche os campos com e-mail e senha válidos', function () {

        it('Então deve ser possível logar com sucesso', function () {

            const user = this.user.loginUser

            cy.apiDelete(user)
            cy.apiSignup(user)

            HomePage.go()
            Header.goToSignup()

            SignupPage.fillFormLogin(user)
            SignupPage.submitLoginForm()

            const txt = ' Logged in as '+ user.name
            Header.loggedUserShouldHave(txt)

                    
        })
    })
})
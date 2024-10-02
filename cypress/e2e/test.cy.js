import Header from "../support/components/header"
import HomePage from "../support/pages/home"
import SignupPage from "../support/pages/signup"

describe('Dado que o usuário está na página de cadastro', function () {
    context('Quando ele preenche com dados válidos', function () {

        beforeEach(function () {
            cy.fixture('data').then(function (user) {
                this.user = user
            })
        })

        it('Então o sistema deve cadastrar com sucesso', function () {

            const user = this.user

            cy.apiDelete(user)

            HomePage.go()
            Header.goToSignup()

            SignupPage.fillSignupForm(user)
            SignupPage.submitSignupForm()
            SignupPage.valueShouldBe(user)

            SignupPage.fillForm(user)
            SignupPage.submit()
            SignupPage.successfulTxtShouldBeVisible('Account Created!')

        })
    })
})
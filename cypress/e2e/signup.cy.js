import Header from "../support/components/header"
import HomePage from "../support/pages/home"
import SignupPage from "../support/pages/signup"

describe('Dado que o usuário está na página de cadastro', function () {

    beforeEach(function () {
        cy.fixture('data').then(function (user) {
            this.user = user
        })
    })

    context('Quando ele preenche com dados válidos', function () {

        it('Então o sistema deve cadastrar com sucesso', function () {

            const user = this.user.registerUser

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

    beforeEach(function () {
        cy.fixture('data').then(function (user) {
            this.user = user
        })
    })

    context('Quando preencho com dados já cadastrados', function () {

        it('Então deve me retornar: Email Address already exist!', function () {

            const user = this.user.duplicatedUser

            cy.apiDelete(user)
            cy.apiSignup(user)

            HomePage.go()
            Header.goToSignup()

            SignupPage.fillSignupForm(user)
            SignupPage.submitSignupForm()

            SignupPage.errorMessageShouldBe('Email Address already exist!')
        })
    })
})
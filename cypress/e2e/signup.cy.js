import HomePage from "../support/pages/home"
import Header from "../support/components/header"
import SignupPage from "../support/pages/signup"

describe('Dado que estou na página de cadastro', function(){

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user    
        })
    })

    context('Quando preencho com dados válidos', function(){

        it('Então deve ser possível cadastrar com sucesso', function(){
            
            const data = this.data.registerUser

            cy.apiDelete(data)

            HomePage.go()
            Header.goToSignup()

            SignupPage.FillSignupForm(data)
            SignupPage.submitSignupForm(data)
            SignupPage.signupShouldBeVisible()
            
            SignupPage.fillForm(data)
            SignupPage.submit()
            SignupPage.successfulTxtShouldBe('Account Created!')
        })
    })

    context('Quando preencho com user já cadastrado', function(){

        it('Então deve me retornar "Email Address already exist!"', function(){

            const data = this.data.duplicatedUser

            cy.apiDelete(data)
            cy.apiSignup(data)

            HomePage.go()
            Header.goToSignup()

            SignupPage.FillSignupForm(data)
            SignupPage.submitSignupForm(data)
            SignupPage.errorMessageShouldBe('Email Address already exist!')
        })
    })
})
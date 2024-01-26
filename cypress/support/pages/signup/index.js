import { el } from "./elements"

const SignupPage = {

    FillSignupForm: function(user) {
        cy.get(el.inputName).type(user.name)
        cy.get(el.inputEmail).type(user.email)
    },

    submitSignupForm: function(user){
        cy.get(el.signupButton).click()            
    },

    signupShouldBeVisible: function(user){
        cy.get(el.signupFormBeVisible)
            .should('be.visible')
    },

    fillForm: function(user){
        cy.get(el.title+user.title).click()
        cy.get(el.pass).type(user.pass)
        cy.get(el.day).select(user.birthday.day)
        cy.get(el.month).select(user.birthday.month)
        cy.get(el.year).select(user.birthday.year)
        
        if (user.newsletter === "yes")cy.get(el.newsletter).click()
        if (user.optin === "yes") cy.get(el.optin).click()
        
        cy.get(el.firstName).type(user.name.split(' ')[0])
        cy.get(el.lastName).type(user.name.split(' ')[1])
        cy.get(el.company).type(user.company)
        cy.get(el.adress1).type(user.adress1)
        cy.get(el.adress2).type(user.adress2)
        cy.get(el.country).select(user.country)
        cy.get(el.state).type(user.state)
        cy.get(el.city).type(user.city)
        cy.get(el.zipcode).type(user.zipcode)
        cy.get(el.number).type(user.number)
    },

    submit: function(){
        cy.get(el.submitButton).click()
    },

    successfulTxtShouldBe: function(txt){
        cy.get(el.successfulMessage)
            .should('have.text', txt)
    },

    errorMessageShouldBe: function(text){
        cy.get(el.errorMessage)
            .should('have.text', text)
    },

    fillFormLogin: function(user){
        cy.get('div[class="login-form"]')
            .should('be.visible')
    
        cy.get(el.inputLoginEmail).type(user.email)
        cy.get(el.inputLoginPass).type(user.pass)
    },

    submitLoginForm: function(){
        cy.get(el.submitLogin).click()
    }
}

export default SignupPage
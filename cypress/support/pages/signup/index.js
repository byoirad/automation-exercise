import { el } from "./elements"

const SignupPage = {

    fillSignupForm: function (user) {
        cy.get(el.inputName).type(user.name)
        cy.get(el.inputEmail).type(user.email)
    },

    submitSignupForm: function (user) {

        cy.get(el.signupButton).click()
    },

    valueShouldBe: function (user) {
        cy.get(el.valueName).should('have.attr', 'value', user.name)
        cy.get(el.valueEmail).should('have.attr', 'value', user.email)
    },

    fillForm: function (user) {
        cy.get(el.title + user.title).click()
        cy.get(el.inputPassword).type(user.password)
        cy.get(el.selectDay).select(user.birthday.day)
        cy.get(el.selectMonth).select(user.birthday.mouth)
        cy.get(el.selectYear).select(user.birthday.year)

        if (user.newsletter === "yes") cy.get(el.checkNewsletter).click()
        if (user.optin === "yes") cy.get(el.checkOptin).click()

        cy.get(el.inputFirstName).type(user.name.split(' ')[0])
        cy.get(el.inputLastName).type(user.name.split(' ')[1])
        cy.get(el.inputCompany).type(user.company)
        cy.get(el.inputAddress1).type(user.address1)
        cy.get(el.inputAddress2).type(user.address2)
        cy.get(el.selectCountry).select(user.country)
        cy.get(el.inputState).type(user.state)
        cy.get(el.inputCity).type(user.city)
        cy.get(el.inputZipcode).type(user.zipcode)
        cy.get(el.inputMobilenumber).type(user.mobile_number)
    },

    submit: function() {
        cy.get(el.submitButton).click()
    },

    successfulTxtShouldBeVisible: function(txt) {
        cy.get(el.successfulMsg).should('have.text', txt)
    },

    errorMessageShouldBe: function(text) {
        cy.get(el.errorMessage)
            .should('have.text', text)
    },

    fillFormLogin: function(user) {
        cy.get(el.inputLoginEmail).type(user.email)
        cy.get(el.inputLoginPassword).type(user.password)
    },

    submitLoginForm: function() {
        cy.get(el.buttonLoginForm).click()
    }

}

export default SignupPage
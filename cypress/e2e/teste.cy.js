import HomePage from "../support/pages/home"

describe('Dado que estou na página de cadastro', function(){
    context('Quando preencho com dados válidos', function(){
        it('Então deve ser possível cadastrar com sucesso', function(){
            
            HomePage.go()

            // cy.get('a[href="/login"]').click()
            // cy.get('div[class="signup-form"]').should('be.visible')

            // const data = {
            //     title: "Mrs",
            //     name: "Homer Simpson",
            //     email: "homersimpson2033@simpson.com",
            //     pass: "homerpasswordtest",
            //     birthday: {
            //         day: "12",
            //         month: "5",
            //         year: "1956"
            //     },
            //     newsletter: "yes",
            //     optin: "no",
            //     company: "HJS Company",
            //     adress1: "Evergreen Terrace, 632, Springfield",
            //     adress2: "Evergreen Terrace, 632, Springfield",
            //     country: "United States",
            //     state: "Springfield",
            //     city: "Evergreen Terrace",
            //     zipcode: "97005",
            //     number: "9(999) 999-9999"
            // }

            // cy.get('input[type="text"]').type(data.name)
            // cy.get('input[data-qa="signup-email"]').type(data.email)
            // cy.get('button[data-qa="signup-button"]').click()
            // cy.get('div[class="login-form"]').should('be.visible')

            // cy.get(`input[value=${data.title}]`).click()
           
            // cy.get('#password').type(data.pass)
            
            // cy.get('#days').select(data.birthday.day)
            // cy.get('#months').select(data.birthday.month)
            // cy.get('#years').select(data.birthday.year)
            
            // if (data.newsletter === "yes")cy.get('#newsletter').click()
            // if (data.optin === "yes") cy.get('#optin').click()
            
            // cy.get('#first_name').type(data.name.split(' ')[0])
            // cy.get('#last_name').type(data.name.split(' ')[1])
            
            // cy.get('#company').type(data.company)
            
            // cy.get('#address1').type(data.adress1)
            // cy.get('#address2').type(data.adress2)
            
            // cy.get('#country').select(data.country)

            // cy.get('#state').type(data.state)
            // cy.get('#city').type(data.city)
            // cy.get('#zipcode').type(data.zipcode)
            // cy.get('#mobile_number').type(data.number)
            
            // // cy.get('button[data-qa="create-account"]').click()
            // // cy.get('h2[class="title text-center"] b').should('have.text', 'Account Created!')

        })
    })
})
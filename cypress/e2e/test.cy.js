describe('Dado que o usuário está na página de cadastro', function(){
    context('Quando ele preenche com dados válidos', function(){
        it('Então o sistema deve cadastrar com sucesso', function(){
            
            cy.visit('http://automationexercise.com')
            cy.get('div[class="features_items"]')
                .should('be.visible')
                
            cy.get('a[href="/login"]').click()
            cy.get('div[class="signup-form"] h2')
                .should('have.text', 'New User Signup!')

            const data = {
                name: "Homer Simpson",
                email: "homersimpsonemailtest1@gmail.com",
                title: "Mrs",
                password: "password24",
                birthday: {
                    day: "12",
                    mouth: "May",
                    year: "1956",
                },
                newsletter: "no",
                optin: "yes",
                company: "The Simpsons",
                address1: "Evergreen Terrace, 632, Springfield",
                address2: "Evergreen Terrace, 632, Springfield",
                country: "United States",
                state: "Oregon",
                city: "Springfield",
                zipcode: "97049",
                mobile_number: "2011909844"
            }
            
            cy.get('input[data-qa="signup-name"]').type(data.name)
            cy.get('input[data-qa="signup-email"]').type(data.email)

            cy.get('button[data-qa="signup-button"]').click()

            cy.get('#name').should('have.attr', 'value', data.name)
            cy.get('#email').should('have.attr', 'value', data.email)

            cy.get(`input[value=${data.title}]`).click()
            cy.get('#password').type(data.password)
            cy.get('#days').select(data.birthday.day)
            cy.get('#months').select(data.birthday.mouth)
            cy.get('#years').select(data.birthday.year)
            if (data.newsletter === "yes") cy.get('#newsletter').click()
            if (data.optin === "yes")cy.get('#optin').click()
            cy.get('#first_name').type(data.name.split(' ')[0])
            cy.get('#last_name').type(data.name.split(' ')[1])
            cy.get('#company').type(data.company)
            cy.get('#address1').type(data.address1)
            cy.get('#address2').type(data.address2)
            cy.get('#country').select(data.country)
            cy.get('#state').type(data.state)
            cy.get('#city').type(data.city)
            cy.get('#zipcode').type(data.zipcode)
            cy.get('#mobile_number').type(data.mobile_number)
        })
    })
})
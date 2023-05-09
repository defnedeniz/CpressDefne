const{faker}=require('@faker-js/faker')

let fakeFirstName=faker.name.firstName()
let fakeLastName=faker.name.lastName()
let fakeEmail=faker.internet.email()
let fakePassword=faker.internet.password()


describe('Login test',()=>{

    it("Login sayfasina git",()=>{

        cy.visit('/register-student/')

        cy.get('input[placeholder="Please enter First Name"]').should("be.visible").type(fakeFirstName)
        cy.get('input[placeholder="Please enter Last Name"]').should("be.visible").type(fakeLastName)
        cy.get('input[placeholder="user@email.com"]').should("be.visible").type(fakeEmail)
        cy.get('input[id=auth-login-v2-password]').should("be.visible").type(fakePassword)
        //cy.get('input[placeholder="Please enter School Name"]').should("be.visible").type(fakePassword)

    })


});

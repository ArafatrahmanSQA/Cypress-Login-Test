export class Loginpage{

    username_textbox = 'input[name="username"]'
    password_textbox = 'input[name="password"]'
    login_button = 'button[type="submit"]'


    enterUsername(username){
        cy.get(this.username_textbox).type(username)

    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)

    }

    clickLogin(){
        cy.get(this.login_button).click()

    }

}
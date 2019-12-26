
class LoginPage
{

    get loginInput()
    {
        return  cy.get('#loginform-email');
    }
    get passwordInput()
    {
        return cy.get('#loginform-password');
    }
    get loginButton()
    {
        return cy.get("#enter-item > p.form-row > input");
    }
    performLogin(login, password)
    {
        this.loginInput.type(`${login}`)
        this.passwordInput.type(`${password}`);
        this.loginButton.click();
    }
}

export default new LoginPage()

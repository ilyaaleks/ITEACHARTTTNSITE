import SearchResultPage from './searchResultPage'

class CatalogPage
{
    open() {
        cy.visit(Cypress.env("ttn"));
    }
    get loginLink()
    {
        return  cy.get("a[title='Войти']");
    }

    loadLoginPage()
    {
        this.loginLink.click({force: true, multiple: true});
    }


}

export default new CatalogPage()

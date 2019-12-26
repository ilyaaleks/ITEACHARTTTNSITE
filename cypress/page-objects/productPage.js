import SearchResultPage from './searchResultPage'

class ProductPage
{

    get purchaseButton()
    {
        return cy.get(".single_add_to_cart_button")
    }
    performBuy()
    {
        this.purchaseButton.click({force: true, multiple: true });
        cy.get("a[title='Корзина']").click({force: true, multiple: true });
    }
}

export default new ProductPage()

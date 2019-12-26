import SearchResultPage from './searchResultPage'

class ShoppingCartPage
{
    get quantityInput()
    {
        return cy.get("#quantity-input-1")
    }
    get itemTotalSum()
    {
        return cy.get(".item-total-sum")
    }
    get removeAllButton()
    {
        return cy.get(".table-remove-all__link");
    }
    deleteCart()
    {
        this.removeAllButton.click({force: true, multiple: true });
    }
    changeQuantityOfGoods(phone)
    {
        this.quantityInput.clear().type(phone.quantity);
        let finalCost=Number.parseInt(phone.quantity)*Number.parseInt(phone.cost);
        cy.log(finalCost);
        this.itemTotalSum.contains(finalCost);
    }
}

export default new ShoppingCartPage()

import SearchResultPage from './searchResultPage'

class TablePage
{
    productToSearch;
    get product()
    {
        return cy.get(".first").contains(this.productToSearch)
    }
    findProductInTable(productToSearch)
    {
        this.productToSearch=productToSearch;
        this.product.siblings('.woocommerce-LoopProduct-link').find('img').click({force: true, multiple: true })
    }
}

export default new TablePage()

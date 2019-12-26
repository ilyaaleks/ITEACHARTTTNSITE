import SearchResultPage from './searchResultPage'

class SearchPage
{

    get searchInput()
    {
        return cy.get("#woocommerce-product-search-field-0");
    }
    performSearch(productToSearch)
    {
        this.searchInput.type(`${productToSearch}{enter}`);
    }
}

export default new SearchPage()

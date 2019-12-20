import {Chance} from "chance"

describe("set", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it("Site", () => {

        cy.log("Task10");
        cy.fixture('phones').then((object) => {

            let email = "ilya.aleks.2011@gmail.com";
            let password = "aleks1922";
            let phone = Chance().pickone(object.phones);
            cy.log(phone.shortName);
            cy.visit("https://www.ttn.by/");
            cy.get("a[title='Войти']").click({force: true, multiple: true});
            cy.get('#loginform-email').type(`${email}`);
            cy.get('#loginform-password').type(`${password}`);
            cy.get("#enter-item > p.form-row > input").click();
            cy.get("#woocommerce-product-search-field-0").type(`${phone.shortName}{enter}`);
            cy.get(".product:nth-child(1) > a:nth-child(1)").click();
            cy.get(".single_add_to_cart_button").click({force: true, multiple: true });
            cy.get("a[title='Корзина']").click({force: true, multiple: true });
            cy.get("#quantity-input-1").clear().type(phone.quantity);
            let finalCost=Number.parseInt(phone.quantity)*Number.parseInt(phone.cost);
            cy.log(finalCost);
            cy.get(".item-total-sum").contains(finalCost);
            cy.get(".table-remove-all__link").click({force: true, multiple: true });

        })
    })
})

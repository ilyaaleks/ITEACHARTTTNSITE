import {Chance} from "chance"
import {
    difference,
    getPlanetsWithDistance,
    Helper,
    intersection,
    isSuperSet,
    printPlanets,
    union
} from "../../../utils/helper"
describe("set",()=>
{
    it("Site",()=>
    {
        cy.log("Task10");
        cy.fixture('obj').then((object)=>{
            let email="ilya.aleks.2011@gmail.com";
            let password="aleks1922";
            cy.visit("https://www.ttn.by/");
            cy.get("a[title='Войти']").click({force: true, multiple: true });
            cy.get('#loginform-email').type(`${email}`);
            cy.get('#loginform-password').type(`${password}`);
            cy.get("#enter-item > p.form-row > input").click();
            cy.get("#search-header").type("iphone{enter}");
            cy.get('a').contains("Смартфон Apple iPhone 7 128GB Black").click();
            cy.get("#search-header").type("iphone{enter}");
            cy.get("div[class^='sc-EHOje']:nth-child(2)").invoke('text').then((divText) => {
                expect(divText.toString().toLowerCase()).to.contain(conv.rate);
            });
        })
    })
})

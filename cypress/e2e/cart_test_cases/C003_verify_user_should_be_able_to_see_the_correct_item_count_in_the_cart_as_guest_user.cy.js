import {HomePage} from "../../pages/home_page_amazon";
import {SignInPage} from "../../pages/sign_in_page_amazon";
import {Strings} from "../../globals/strings";
import {CartPage} from "../../pages/cart_page_amazon";


describe("Verify user should be able to see the correct item count in the cart as guest user", function() {

    let homePage = new HomePage();
    let cartPage = new CartPage();
    let strings = new Strings()

    before(() =>
    {
        cy.visit(Cypress.config('baseUrl')).title().should("contain",strings.title);
        console.log('Done')
    })

    it("Verify user should be able to see the correct item count in the cart as guest user", function() {

        homePage.initiateSearch(strings.searchQuery);
        homePage.loadFirstCardOnResultPage();
        homePage.addToCart();
        cartPage.verifyProductCountInCart(1);
    });

});

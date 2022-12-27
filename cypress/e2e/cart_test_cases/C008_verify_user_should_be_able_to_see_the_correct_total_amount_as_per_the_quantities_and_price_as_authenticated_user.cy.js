import {HomePage} from "../../pages/home_page_amazon";
import {Strings} from "../../globals/strings";
import {CartPage} from "../../pages/cart_page_amazon";
import {SignInPage} from "../../pages/sign_in_page_amazon";


describe("Verify user should be able to see the correct total amount as per the " +
    "quantities and price as guest user", function() {

    let homePage = new HomePage();
    let cartPage = new CartPage();
    let signInPage = new SignInPage();
    let strings = new Strings()

    before(() =>
    {
        cy.visit(Cypress.config('baseUrl')).title().should("contain",strings.title);
        console.log('Done')
    })

    it("Verify user should be able to see the correct total amount as per the " +
        "quantities and price as guest user", function() {

        homePage.clickOnTheSignInButton();
        signInPage.verifySuccessfullyNavigateToSignInPage(strings.signIn);
        signInPage.enterEmail(strings.validEmail);
        signInPage.clickOnContinueButton();
        signInPage.verifyUserRouteToPasswordScreen(strings.passwordLabel);
        signInPage.enterPassword(strings.validPassword);
        signInPage.clickOnSignInButton();
        homePage.initiateSearch(strings.searchQuery);
        homePage.loadFirstCardOnResultPage();
        homePage.selectQuantity(1);
        homePage.addToCart();
        cartPage.verifyProductCountInCart(2);
        cartPage.clickOnCart();
        cartPage.getTotalPrice(2)
        cartPage.clickOnCart();
        cartPage.deleteFromCart();

        // cartPage.deleteFromCart();
        // cartPage.verifyProductCountInCart(0);
    });

});

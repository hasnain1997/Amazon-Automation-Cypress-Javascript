import {HomePage} from "../../pages/home_page_amazon";
import {SignInPage} from "../../pages/sign_in_page_amazon";
import {Strings} from "../../globals/strings";
import {CartPage} from "../../pages/cart_page_amazon";


describe("Verify that user should be able to add items in the cart as authenticated user", function() {

    let homePage = new HomePage();
    let signInPage = new SignInPage();
    let cartPage = new CartPage();
    let strings = new Strings()

    before(() =>
    {
        cy.visit(Cypress.config('baseUrl')).title().should("contain",strings.title);
        console.log('Done')
    })

    it("Verify that user should be able to add items in the cart as authenticated user", function() {

        homePage.clickOnTheSignInButton();
        signInPage.verifySuccessfullyNavigateToSignInPage(strings.signIn)
        signInPage.enterEmail(strings.validEmail)
        signInPage.clickOnContinueButton()
        signInPage.verifyUserRouteToPasswordScreen(strings.passwordLabel)
        signInPage.enterPassword(strings.validPassword)
        signInPage.clickOnSignInButton()
        homePage.verifySignInUser(strings.userName)
        homePage.initiateSearch(strings.searchQuery);
        homePage.loadFirstCardOnResultPage();
        homePage.addToCart();
        cartPage.clickOnCart();
        cartPage.deleteFromCart();
    });

});

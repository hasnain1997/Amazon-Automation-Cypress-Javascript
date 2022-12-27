import {HomePage} from "../../pages/home_page_amazon";
import {SignInPage} from "../../pages/sign_in_page_amazon";
import {Strings} from "../../globals/strings";


describe("Verify user should be able to navigate to sign in page upon clicking the sign " +
    "in button on right corner of the home screen.",
    function() {

    let homePage = new HomePage();
    let signInPage = new SignInPage();
    let strings = new Strings()

    before(() =>
    {
        cy.visit(Cypress.config('baseUrl')).title().should("contain",strings.title);
        console.log('Done')
    })

    it("Verify user should be able to navigate to sign in page upon clicking the sign " +
        "in button on right corner of the home screen.", function() {

        homePage.clickOnTheSignInButton();
        signInPage.verifySuccessfullyNavigateToSignInPage(strings.signIn)
    });

});

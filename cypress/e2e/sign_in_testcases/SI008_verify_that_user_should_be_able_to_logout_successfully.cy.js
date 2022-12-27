import {HomePage} from "../../pages/home_page_amazon";
import {SignInPage} from "../../pages/sign_in_page_amazon";
import {Strings} from "../../globals/strings";


describe("Verify that user should be able to logout successfully.", function() {

    let homePage = new HomePage();
    let signInPage = new SignInPage();
    let strings = new Strings()

    before(() =>
    {
        cy.visit(Cypress.config('baseUrl')).title().should("contain",strings.title);
        console.log('Done')
    })

    it("Verify that user should be able to logout successfully.", function() {

        homePage.clickOnTheSignInButton();
        signInPage.verifySuccessfullyNavigateToSignInPage(strings.signIn)
        signInPage.enterEmail(strings.validEmail)
        signInPage.clickOnContinueButton()
        signInPage.verifyUserRouteToPasswordScreen(strings.passwordLabel)
        signInPage.enterPassword(strings.validPassword)
        signInPage.clickOnSignInButton()
        homePage.verifyUserCanLogout(strings.signOut)
        signInPage.verifySuccessfullyNavigateToSignInPage(strings.signIn)
    });

});

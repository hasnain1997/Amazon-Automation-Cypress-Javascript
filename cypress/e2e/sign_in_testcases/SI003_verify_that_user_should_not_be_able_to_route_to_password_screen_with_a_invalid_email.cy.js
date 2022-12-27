import {HomePage} from "../../pages/home_page_amazon";
import {SignInPage} from "../../pages/sign_in_page_amazon";
import {Strings} from "../../globals/strings";


describe("Verify that user should not be able to route to password screen with a invalid email.", function() {

    let homePage = new HomePage();
    let signInPage = new SignInPage();
    let strings = new Strings()

    before(() =>
    {
        cy.visit(Cypress.config('baseUrl')).title().should("contain",strings.title);
        console.log('Done')
    })

    it("Verify that user should not be able to route to password screen with a invalid email.", function() {

        homePage.clickOnTheSignInButton();
        signInPage.verifySuccessfullyNavigateToSignInPage(strings.signIn)
        signInPage.enterEmail(strings.invalidEmail)
        signInPage.clickOnContinueButton()
        signInPage.verifyUserShouldNotBeAbleToProceedWithInvalidCredentials(strings.alertContentForInvalidEmail)
    });

});

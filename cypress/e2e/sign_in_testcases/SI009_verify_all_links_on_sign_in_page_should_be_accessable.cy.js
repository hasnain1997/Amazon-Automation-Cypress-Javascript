import {HomePage} from "../../pages/home_page_amazon";
import {SignInPage} from "../../pages/sign_in_page_amazon";
import {Strings} from "../../globals/strings";


describe("Verify that the following links on sign in page should be accessable:\n" +
    "1) Conditions of use\n" +
    "2) Privacy Notice\n" +
    "3) Need Help:\n" +
    "  a) Forgot your Password\n" +
    "  b) Other issues with Sign in\n" +
    "4) Create your Amazon account ", function() {

    let homePage = new HomePage();
    let signInPage = new SignInPage();
    let strings = new Strings()

    before(() =>
    {
        cy.visit(Cypress.config('baseUrl')).title().should("contain",strings.title);
        console.log('Done')
    })

    it("Verify all links on sign in page should be accessable.", function() {

        homePage.clickOnTheSignInButton();
        signInPage.verifySuccessfullyNavigateToSignInPage(strings.signIn)
        signInPage.verifyIfButtonIsAccessible(strings.conditionsOfUse, strings.conditionsOfUsePath )
        signInPage.verifyIfButtonIsAccessible(strings.privacyNotice, strings.privacyNoticePath )
        signInPage.getElementByTextAndClick(strings.needHelp)
        signInPage.verifyIfButtonIsAccessible(strings.forgotYourPassword, strings.forgotYourPasswordPath )
        signInPage.getElementByTextAndClick(strings.needHelp)
        signInPage.verifyIfButtonIsAccessible(strings.OtherSignInIssues, strings.OtherSignInIssuesPath )

    });

});

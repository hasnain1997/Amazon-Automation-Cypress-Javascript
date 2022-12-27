import {HomePage} from "../../pages/home_page_amazon";
import {SignInPage} from "../../pages/sign_in_page_amazon";
import {Strings} from "../../globals/strings";


describe("Verify that password field should be mandatory.", function() {

    let homePage = new HomePage();
    let signInPage = new SignInPage();
    let strings = new Strings()

    before(() =>
    {
        cy.visit(Cypress.config('baseUrl')).title().should("contain",strings.title);
        console.log('Done')
    })

    it("Verify that password field should be mandatory.", function() {

        homePage.clickOnTheSignInButton();
        signInPage.verifySuccessfullyNavigateToSignInPage(strings.signIn)
        signInPage.enterEmail(strings.validEmail)
        signInPage.clickOnContinueButton()
        signInPage.verifyUserRouteToPasswordScreen(strings.passwordLabel)
        signInPage.clickOnSignInButton()
        signInPage.verifyFieldIsMandatory(strings.alertContentForPasswordAsMandatory)
    });

});

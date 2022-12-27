import {HomePage} from "../../pages/home_page_amazon";
import {SignInPage} from "../../pages/sign_in_page_amazon";
import {Strings} from "../../globals/strings";


describe("Verify Pagination should be working fine " +
    "Select Page : 3", function() {

    let homePage = new HomePage();
    let signInPage = new SignInPage();
    let strings = new Strings()

    before(() =>
    {
        cy.visit(Cypress.config('baseUrl')).title().should("contain",strings.title);
        console.log('Done')
    })

    it("Verify Pagination should be working fine " +
        "Select Page : 3", function() {

        homePage.clickOnTheSignInButton();
        signInPage.verifySuccessfullyNavigateToSignInPage(strings.signIn)
        signInPage.enterEmail(strings.validEmail)
        signInPage.clickOnContinueButton()
        signInPage.verifyUserRouteToPasswordScreen(strings.passwordLabel)
        signInPage.enterPassword(strings.validPassword)
        signInPage.clickOnSignInButton()
        homePage.verifySignInUser(strings.userName)
        homePage.initiateSearch(strings.fsSearchQuery)
        homePage.clickOnDesiredPage(3)
        homePage.verifyPageNumber(3)

    });

});

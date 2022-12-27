import {SignInPageSelectors} from "./selectors";
import {BasePage} from "./base_page";


export class SignInPage extends BasePage{

    signInPageSelectors = new SignInPageSelectors()


    /**
     * Type and Verify Email
     */
    enterEmail(email)
    {

        this.typeAndVerify(this.signInPageSelectors.email, email)
    }

    /**
     * Verify User Navigate to Sign in Page
     */
    verifySuccessfullyNavigateToSignInPage(text)
    {

        this.verifyElementContainsText(this.signInPageSelectors.signInText, text)
    }

    /**
     * Type and Verify Password
     */
    enterPassword(password)
    {

        this.typeAndVerify(this.signInPageSelectors.password, password)
    }

    /**
     * Click on Submit button
     */
    clickOnContinueButton()
    {
        this.getElementAndClick(this.signInPageSelectors.continueButton)
    }

    /**
     * Click on Submit button
     */
    clickOnSignInButton()
    {
        this.getElementAndClick(this.signInPageSelectors.signInButton)
    }

    /**
     * Verify Email Field Exists
     */
    verifyEmailFieldExist()
    {
        this.verifyElementExist(this.signInPageSelectors.email)

    }

    /**
     * Verify Password Field Exists
     */
    verifyPasswordFieldExist()
    {
        this.verifyElementExist(this.signInPageSelectors.password)
    }


    /**
     * Verify should not be able to proceed futher with empty content
     */
    verifyFieldIsMandatory(strings)
    {
        this.verifyElementContainsText(this.signInPageSelectors.alertContentForMandatoryField, strings)
    }

    /**
     * Verify Prompt for Invalid email
     */
    verifyUserShouldNotBeAbleToProceedWithInvalidCredentials(strings)
    {
        this.verifyElementContainsText(this.signInPageSelectors.alertContentForInvalidEmail, strings)
    }

    /**
     * Verify can successfully route to password screen with valid email
     */
    verifyUserRouteToPasswordScreen(strings)
    {
        this.verifyElementContainsText(this.signInPageSelectors.passwordLabel, strings)
    }

    /**
     * Verify If Button is accessible
     */
    verifyIfButtonIsAccessible(buttontext, path)
    {
        cy.contains(buttontext).click()
        cy.location('pathname').should('contain', path)
        cy.go('back')
    }








}

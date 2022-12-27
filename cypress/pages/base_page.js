import { Strings } from '../globals/strings'

export class BasePage {

    strings = new Strings();

    /**
     * set a delay
     * @param value - value of time to wait
     */
    setDelay(value) {
        cy.wait(value);
    }

    /**
     * get element
     * @param selector - WebElement
     */

    getElement(selector) {
        return cy.get(selector)
    }

    /**
     * select element
     * @param parentSelector - WebElement
     * @param childSelector
     * @param value
     */

    selectElement(parentSelector, childSelector, value) {

        this.getElement(parentSelector).click()
        this.getElement(childSelector).contains(value).click({force: true});

    }

    /**
     * get element and click on it
     * @param selector - WebElement
     */

    getElementAndClick(selector) {
        return cy.get(selector, { timeout:10000 }).click({force:true})
    }

    /**
     * get element and click on it
     * @param text - WebElement
     */

    getElementByTextAndClick(text) {
        return cy.contains(text).click({force:true})
    }

    /**
     * type in input field
     * @param selector - selector for input field
     * @param text - string to type
     */
    enterText(selector, text){
        cy.get(selector).type(text);
    }

    /**
     * verify element contains text
     */
    verifyElementContainsTextThenClick(element, text){
        cy.get(element).contains(text).click()
    }

    /**
     * verify element contains text
     */
    verifyElementContainsText(element, text){
        cy.get(element).contains(text)
    }

    /**
     * type and verify text
     * @param elementID - element of text
     * @param text - text to verify
     */
    typeAndVerify(elementID, text) {
        let element = cy.get(elementID);
        element.click();
        element.type(text);
        element.should("have.value", text);
    }

    /**
     * verify element exist
     * @param element - element to verify
     * @returns {boolean} true if exist else false
     */
    verifyElementExist(element) {
        return cy.get(element).should("exist");
    }

    /**
     * Click on a Specific Index of Element
     * @param element - element to verify
     * @param index - element to verify
     * @returns {boolean} true if exist else false
     */
    getElementByIndex(element, index) {
        return cy.get(element).eq(index).click();
    }
}

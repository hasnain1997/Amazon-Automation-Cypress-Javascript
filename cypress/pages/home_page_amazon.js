import {HomePageSelectors} from "./selectors";
import {BasePage} from "./base_page";


export class HomePage extends BasePage{

    homePageSelectors = new HomePageSelectors()

    /**
     * Click on Sign in button
     */
    clickOnTheSignInButton(email)
    {

        this.getElementAndClick(this.homePageSelectors.signInButton)
    }

    /**
     * Verify can successfully route to home screen with valid passwor
     * */
    verifySignInUser(strings)
    {
        this.verifyElementContainsText(this.homePageSelectors.signInButton, strings)
    }

    /**
     * select Quantity
     */
    selectQuantity(quantity)
    {
        this.getElementByIndex(this.homePageSelectors.quantityButton,0)
        this.getElementByIndex(this.homePageSelectors.quantityDropdown, quantity)
    }


    /**
     * Verify can successfully route to home screen with valid password
     */
    verifyUserCanLogout(strings)
    {
        this.getElement(this.homePageSelectors.signInButton)
            .trigger('mouseover')
            .then(()=>{
                this.verifyElementContainsTextThenClick(this.homePageSelectors.signOutButton, strings)
            })

    }

    /**
     * Search Men's Clothing
     */
    initiateSearch(string)
    {
        this.setDelay(4000)
        this.typeAndVerify(this.homePageSelectors.searchBar, string)
        this.getElementAndClick(this.homePageSelectors.submitSearchButton)
    }

    /**
     * Load the First Card
     */
    loadFirstCardOnResultPage()
    {
        this.getElementByIndex(this.homePageSelectors.resultCardDescription, 0)
    }

    /**
     * Add to cart
     */
    addToCart()
    {
        this.getElementAndClick(this.homePageSelectors.addToCart)
    }

    /**
     * select low to high price
     */
    selectLowToHighPriceSorting(sort)
    {
        this.getElementByIndex(this.homePageSelectors.quantityButton,0)
        this.getElementByIndex(this.homePageSelectors.quantityDropdown, sort)
    }

    /**
     * select low to high price
     */
    verifyLowToHighPrice()
    {
        cy.get(this.homePageSelectors.price).last().invoke('text').then((lastpricetext) => {
            var lastPrice = lastpricetext.replace( /^\D+/g, '');
            cy.log(lastPrice)
            cy.get(this.homePageSelectors.price).first().invoke('text').then((firstpricetext) => {
                var firstPrice=firstpricetext.replace( /^\D+/g, '');
                cy.log(lastPrice)
                expect(firstPrice).to.not.equal(lastPrice)
            })
        });

    }

    /**
     * Our brand checkbox filter
     */
    ourBrandCheckboxFilter()
    {
        this.getElement(this.homePageSelectors.ourBrandCheckbox).eq(0).check({force:true});
    }

    /**
     * Our brand checkbox filter
     */
    uncheckOurBrandCheckboxFilter()
    {
        this.getElement(this.homePageSelectors.ourBrandCheckbox).eq(0).uncheck({force:true});
    }

    /**
     * verify Amazon Brand Tag On All ResultCards
     */
    verifyAmazonBrandTagOnAllResultCards()
    {
        this.getElement(this.homePageSelectors.amazonBrandTag).should('contain', "Amazon brand")
    }

    /**
     * click On The Desired Page
     */
    clickOnDesiredPage(pageNumber)
    {
        this.getElement(this.homePageSelectors.paginationButton).eq(pageNumber-1).click()
    }

    /**
     * verify Page Number
     */
    verifyPageNumber(pageNumber)
    {
        this.setDelay(2000)
        var pageNumberStr  ='sr_pg_'+ pageNumber
        cy.url().should('include', pageNumberStr)
    }


}

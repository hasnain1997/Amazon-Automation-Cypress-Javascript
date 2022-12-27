import {CartPageSelectors} from "./selectors";
import {HomePage} from "./home_page_amazon";


export class CartPage extends HomePage{

    cartPageSelectors = new CartPageSelectors()

    /**
     * Verify cart count
     */
    verifyProductCountInCart(count)
    {
        this.verifyElementContainsText(this.cartPageSelectors.cartCount, count)
    }

    /**
     * Click on Cart
     */
    clickOnCart()
    {
        this.getElementAndClick(this.cartPageSelectors.cartCount)
    }

    /**
     * Delete product from Cart
     */
    deleteFromCart()
    {
        this.getElementAndClick(this.cartPageSelectors.deleteButton)
    }

    /**
     * verify total (Quantity * price)
     */
    getTotalPrice(quantity)
    {
        cy.get(this.cartPageSelectors.price).invoke('text').then((text) => {
            var thenum = text.replace( /^\D+/g, '');
            var total = thenum * quantity
            cy.get(this.cartPageSelectors.totalPrice).eq(2).invoke('text').then((totalPriceFromElement) => {
                var totalPriceFromElementNum=totalPriceFromElement.replace( /^\D+/g, '');
                expect(totalPriceFromElementNum).contains(total)
            })
        });
    }


}

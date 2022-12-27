export class SignInPageSelectors{
    email = 'input[type=email]';
    password = 'input[type="password"]';
    continueButton = 'input#continue';
    signInText = 'h1[class*="a"]';
    alertContentForMandatoryField = '[class*="alert-content"]';
    alertContentForInvalidEmail = ".a-list-item";
    passwordLabel = 'label[for*="password"]';
    signInButton  = '#signInSubmit';
}

export class HomePageSelectors{
    signInButton = 'span[id*="accountList"]';
    signOutButton = 'span[class="nav-text"]';
    searchBar = 'input[id="twotabsearchtextbox"]';
    submitSearchButton = '#nav-search-submit-button';
    resultCardDescription = '[class*="a-size-base-plus a-color"]';
    addToCart = '#add-to-cart-button';
    quantityButton = "[data-action=a-dropdown-button]";
    quantityDropdown = ".a-dropdown-item";
    ourBrandCheckbox = 'input[type="checkbox"]';
    amazonBrandTag = '[class*="puis-light-weight-text"]';
    paginationButton = '[class*="pagination-button"]';
    price = 'span>span.a-offscreen';

}

export class CartPageSelectors{
    cartCount = "#nav-cart-count";
    deleteButton = '[value="Delete"]';
    price = '[class*="sc-product-price a-text"]';
    totalPrice = '[class*="a-color-base sc-price"]';
}

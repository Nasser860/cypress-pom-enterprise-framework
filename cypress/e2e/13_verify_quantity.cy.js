/*Test Case 13: Verify Product quantity in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'View Product' for any product on home page
5. Verify product detail is opened
6. Increase quantity to 4
7. Click 'Add to cart' button
8. Click 'View Cart' button
9. Verify that product is displayed in cart page with exact quantity*/




/*describe('Test Case 13: Verify Product quantity in Cart', () => {
    it('should adjust product quantity, add to cart, and verify the correct quantity in checkout', () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3 & 4. Click 'View Product' for the first product on the home page and verify landing
      cy.get('.choose a').first().click();
      cy.url().should('include', '/product_details/');
      cy.get('.product-information').should('be.visible');
  
      // 5. Increase quantity input field to 4
      // .clear() wipes out the default '1' value before typing our target number
      cy.get('input#quantity').clear().type('4');
  
      // 6. Click 'Add to cart' button
      cy.get('button.cart').click();
  
      // 7. Click 'View Cart' link text on the success modal popup
      cy.get('.modal-content').should('be.visible');
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
  
      // 8. Verify that product is displayed in cart page with exact quantity 4
      cy.get('.cart_quantity button')
        .should('be.visible')
        .and('have.text', '4');
    });
  });*/


  import HomePage from '../support/pages/HomePage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';

describe('Test Case 13: Verify Product quantity in Cart (POM Style)', () => {
  it('should adjust product quantity, add to cart, and verify the correct quantity in checkout using Page Objects', () => {
    // 1. Navigate to the website home view
    HomePage.visit();

    // 2. Click 'View Product' for the first item on the home page grid list
    ProductsPage.viewFirstProductDetails();

    // 3. Clear the default value of '1' and type '4' into the quantity input box
    ProductsPage.quantityInput.clear().type('4');

    // 4. Click the 'Add to cart' action button
    ProductsPage.addToCartButton.click();

    // 5. Click the 'View Cart' modal overlay link to go to checkout view
    ProductsPage.modalContent.should('be.visible');
    ProductsPage.navigateToCartFromModal();

    // 6. Verify landing and assert that the row item displays the exact quantity 4
    CartPage.verifyCartPageLanding();
    cy.get('#product-1 .cart_quantity').should('contain.text', '4');
  });
});

  
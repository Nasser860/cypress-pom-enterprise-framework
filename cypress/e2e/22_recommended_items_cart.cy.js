/*Test Case 22: Add to cart from Recommended items
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Scroll to bottom of page
4. Verify 'RECOMMENDED ITEMS' are visible
5. Click on 'Add To Cart' on Recommended product
6. Click on 'View Cart' button
7. Verify that product is displayed in cart page*/

/*describe('Test Case 22: Add to cart from Recommended items', () => {
    it('should scroll to recommended items, add a product to cart, and verify it in checkout', () => {
      // 1. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 2 & 3. Scroll to the bottom of the page and verify 'RECOMMENDED ITEMS' heading is visible
      cy.scrollTo('bottom');
      cy.get('.recommended_items .title')
        .should('be.visible')
        .and('contain.text', 'recommended items');
  
      // 4. Click on 'Add To Cart' on the first product inside the active Recommended Items section container
      // We target the active slider block item and use force click to bypass any sliding animation loops safely
      cy.get('#recommended-item-carousel .active .add-to-cart').first().click({ force: true });
  
      // 5. Click on 'View Cart' button on the success modal popup panel
      cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
  
      // 6. Verify that the product is displayed in the cart table page successfully
      cy.get('tbody tr').should('have.length.greaterThan', 0);
    });
  });*/


    import HomePage from '../support/pages/HomePage';
    import CartPage from '../support/pages/CartPage';

    describe('Test Case 22: Add to cart from Recommended items (POM Style)', () => {
     it('should scroll down, add a recommended item, and confirm its presence in the cart', () => {
    // 1. Launch browser & 2. Navigate to url
    HomePage.visit();

    // 3. Scroll to bottom of page
    HomePage.scrollToRecommendedItems();

    // 4. Verify 'RECOMMENDED ITEMS' are visible
    HomePage.verifyRecommendedItemsVisible();

    // 5. Click on 'Add To Cart' on Recommended product
    HomePage.addRecommendedProductToCart();

    // 6. Click on 'View Cart' button
    HomePage.navigateToCartFromModal();

    // 7. Verify that product is displayed in cart page
    CartPage.verifyCartPageLanding();
    CartPage.verifyProductIsDisplayedInCart();
  });
});

  
/*Test Case 17: Remove Products From Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click 'X' button corresponding to particular product
8. Verify that product is removed from the cart*/




/*describe('Test Case 17: Remove Products From Cart', () => {
    it('should add a product to the cart and then remove it successfully', () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3. Add first product to cart from homepage grid
      cy.get('.productinfo a[data-product-id="1"]').first().click();
      cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
  
      // 4. Click 'Cart' button and verify cart page is displayed
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
      cy.get('#product-1').should('be.visible');
  
      // 5. Click 'X' button corresponding to that particular product
      // The delete button lives inside the .cart_quantity_delete class container
      cy.get('#product-1 .cart_quantity_delete').click();
  
      // 6. Verify that product is completely removed from the cart
      // We check that the structural row ID no longer exists on the page DOM
      cy.get('#product-1').should('not.exist');
      
      // Extra safety: Check that the website's fallback empty cart notice message appears
      cy.get('#empty_cart').should('be.visible');
    });
  });*/


    import HomePage from '../support/pages/HomePage';
    import ProductsPage from '../support/pages/ProductsPage';
    import CartPage from '../support/pages/CartPage';

    describe('Test Case 17: Remove Products From Cart (POM Style)', () => {
    it('should add a product to the cart and then remove it successfully using Page Objects', () => {
    // 1. Navigate to the website home view and catalog grid
    HomePage.visit();

    // 2. Add the first product to cart using the ProductsPage object
    ProductsPage.addFirstItemToCart();
    ProductsPage.navigateToCartFromModal();

    // 3. Verify landing properties on the Cart view screen matrix
    CartPage.verifyCartPageLanding();
    CartPage.productOneRow.should('be.visible');

    // 4. Click the 'X' button corresponding to that particular product row
    CartPage.cartDeleteButton.click();

    // 5. Verify that product is completely removed from the cart DOM layout
    CartPage.productOneRow.should('not.exist');
    CartPage.emptyCartNotice.should('be.visible');
  });
});

  
/*Test Case 12: Add Products in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Products' button
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price*/



/*describe('Test Case 12: Add Products in Cart', () => {
    it('should add two products to the cart and verify their details successfully', () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3. Click 'Products' button
      cy.contains('a', /Products/i).click();
      cy.url().should('include', '/products');
  
      // 4. Hover over first product and click 'Add to cart'
      // We target the overlay or the main button loop using .first()
      cy.get('.productinfo a[data-product-id="1"]').first().click();
  
      // 5. Click 'Continue Shopping' button on the success modal popup
      cy.get('.modal-content').should('be.visible');
      cy.get('.modal-footer .btn-success').click();
  
      // 6. Hover over second product and click 'Add to cart'
      cy.get('.productinfo a[data-product-id="2"]').first().click();
  
      // 7. Click 'View Cart' button on the modal popup
      cy.get('.modal-content').should('be.visible');
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
  
      // 8. Verify both products are added to the Cart grid table
      cy.get('#product-1').should('be.visible');
      cy.get('#product-2').should('be.visible');
  
      // 9. Verify their prices, quantity, and total price columns
      // Product 1 validations
      cy.get('#product-1 .cart_price').should('contain.text', 'Rs. 500');
      cy.get('#product-1 .cart_quantity').should('contain.text', '1');
      cy.get('#product-1 .cart_total').should('contain.text', 'Rs. 500');
  
      // Product 2 validations
      cy.get('#product-2 .cart_price').should('contain.text', 'Rs. 400');
      cy.get('#product-2 .cart_quantity').should('contain.text', '1');
      cy.get('#product-2 .cart_total').should('contain.text', 'Rs. 400');
    });
  });*/


  import HomePage from '../support/pages/HomePage';
  import ProductsPage from '../support/pages/ProductsPage';
  import CartPage from '../support/pages/CartPage';
  
  describe('Test Case 12: Add Products in Cart (POM Style)', () => {
    it('should add two products to the cart and verify their details successfully using Page Objects', () => {
      // 1. Open the website and navigate to the catalog view
      HomePage.visit();
      HomePage.navigateToProducts();
      ProductsPage.verifyProductsPageLanding();
  
      // 2. Click Add to Cart on product 1 and clear the modal popup window
      cy.get('.productinfo a[data-product-id="1"]').first().click();
      ProductsPage.modalContent.should('be.visible');
      cy.get('.modal-footer .btn-success').click(); 
  
      // 3. Click Add to Cart on product 2 and route directly inside checkout view
      cy.get('.productinfo a[data-product-id="2"]').first().click();
      ProductsPage.modalContent.should('be.visible');
      ProductsPage.navigateToCartFromModal();
  
      // 4. Verify landing row properties on the checkout table structure
      CartPage.verifyCartPageLanding();
      cy.get('#product-1').should('be.visible');
      cy.get('#product-2').should('be.visible');
  
      // 5. INLINE VALIDATION CHECKOUT - Bypasses any external functions completely!
      cy.get('#product-1 .cart_price').should('contain.text', 'Rs. 500');
      cy.get('#product-1 .cart_quantity').should('contain.text', '1');
      cy.get('#product-1 .cart_total').should('contain.text', 'Rs. 500');
  
      cy.get('#product-2 .cart_price').should('contain.text', 'Rs. 400');
      cy.get('#product-2 .cart_quantity').should('contain.text', '1');
      cy.get('#product-2 .cart_total').should('contain.text', 'Rs. 400');
    });
  });
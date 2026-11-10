/*Test Case 8: Verify All Products and product detail page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand*/



/*describe('Test Case 8: Verify All Products and product detail page', () => {
    it('should navigate to products and verify details of the first product successfully', () => {
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      cy.contains('a', /Products/i).click();
  
      cy.url().should('include', '/products');
      cy.get('.features_items').should('be.visible').and('contain.text', 'All Products');
  
      cy.get('.choose a').first().click();
      cy.url().should('include', '/product_details/');
  
      cy.get('.product-information h2').should('be.visible');
      cy.get('.product-information p').should('contain.text', 'Category:');
      cy.get('.product-information span span').should('be.visible');
      cy.get('.product-information').should('contain.text', 'Availability:');
      cy.get('.product-information').should('contain.text', 'Condition:');
      cy.get('.product-information').should('contain.text', 'Brand:');
    });
  });*/



    import HomePage from '../support/pages/HomePage';
    import ProductsPage from '../support/pages/ProductsPage';

    describe('Test Case 8: Verify All Products and product detail page (POM Style)', () => {
    it('should navigate to products and verify item attribute cards cleanly using Page Objects', () => {
    // 1. Navigate to home and click Products via HomePage object
    HomePage.visit();
    HomePage.navigateToProducts();

    // 2. Validate product catalog grid page landing state properties
    ProductsPage.verifyProductsPageLanding();

    // 3. Drill down into the first item view card container
    ProductsPage.viewFirstProductDetails();

    // 4. Assert descriptive product variables (Name, Price, Category, Brand, Stock)
    ProductsPage.verifyProductAttributes();
  });
});

  
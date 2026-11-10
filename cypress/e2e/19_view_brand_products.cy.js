/*Test Case 19: View & Cart Brand Products
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify that Brands are visible on left side bar
5. Click on any brand name
6. Verify that user is navigated to brand page and brand products are displayed
7. On left side bar, click on any other brand link
8. Verify that user is navigated to that brand page and can see products*/




    /*describe('Test Case 19: View & Cart Brand Products', () => {
    it('should navigate through sidebar brands and verify filtered products successfully', () => {
      // 1. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 2. Click on 'Products' button
      cy.contains('a', /Products/i).click();
  
      // 3. Verify that Brands sidebar panel is visible on left sidebar
      cy.get('.brands_products').should('be.visible');
  
      // 4. Click on 'Polo' brand name link
      // We target the link directly inside the brands list container
      cy.get('.brands-name').contains(/Polo/i).click();
  
      // 5. Verify that user is navigated to brand page and brand products are displayed
      cy.url().should('include', '/brand_products/Polo');
      cy.get('.features_items h2.title')
        .should('be.visible')
        .and('contain.text', 'Brand - Polo Products');
  
      // 6. On left sidebar, click on 'H&M' brand name link
      cy.get('.brands-name').contains(/H&M/i).click();
  
      // 7. Verify that user is navigated to that brand page successfully and can see products
      cy.url().should('include', '/brand_products/H&M');
      cy.get('.features_items h2.title')
        .should('be.visible')
        .and('contain.text', 'Brand - H&M Products');
    });
  });*/


    import HomePage from '../support/pages/HomePage';
    import ProductsPage from '../support/pages/ProductsPage';

    describe('Test Case 19: View & Cart Brand Products (POM Style)', () => {
    it('should navigate through sidebar brands and verify filtered results grid cleanly using Page Objects', () => {
    // 1. Navigate to the website catalog view grid matrix
    HomePage.visit();
    HomePage.navigateToProducts();

    // 2. Verify that brands panel box is visible on left sidebar layout block
    ProductsPage.brandsSidebar.should('be.visible');

    // 3. Click on any brand name on the left sidebar list (e.g., Babyhug)
    ProductsPage.brandsSidebar.contains(/Babyhug/i).click();

    // 4. Verify that user lands on the correct brand page successfully
    cy.url().should('include', '/brand_products/Babyhug');
    ProductsPage.productGridTitle
      .should('be.visible')
      .and('contain.text', 'Brand - Babyhug Products');

    // 5. Click on another brand name link (e.g., H&M)
    ProductsPage.brandsSidebar.contains(/H&M/i).click();

    // 6. Verify that user lands on that brand page and confirms header text string
    cy.url().should('include', '/brand_products/H&M');
    ProductsPage.productGridTitle
      .should('be.visible')
      .and('contain.text', 'Brand - H&M Products');
    ProductsPage.verifyProductsVisible();
  });
});

  
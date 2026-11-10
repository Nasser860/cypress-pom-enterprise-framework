/*Test Case 9: Search Product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible*/



/*describe('Test Case 9: Search Product', () => {
    const searchTerm = 'tshirt';
  
    it('should search for a product and verify the results grid matches the query', () => {
      // 1 & 2. Navigate securely using HTTPS and check the loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3 & 4. Click 'Products' button and verify landing on ALL PRODUCTS page
      cy.contains('a', /Products/i).click();
      cy.url().should('include', '/products');
      cy.get('.features_items').should('be.visible').and('contain.text', 'All Products');
  
      // 5. Enter product name in search input and click search button
      // Target the specific data attribute for the search box input
      cy.get('input#search_product').type(searchTerm);
      cy.get('button#submit_search').click();
  
      // 6. Verify 'SEARCHED PRODUCTS' heading is visible on the results grid
      cy.get('.features_items h2.title')
        .should('be.visible')
        .and('contain.text', 'Searched Products');
  
      // 7. Verify that the products related to the search are visible in the grid layout
      // We check the single product item containers to make sure at least one results card displays
      cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0);
      
      // Extra safety: Check that the product text matches our query case-insensitively
      cy.get('.productinfo p').first().should('include.text', 'Tshirt');
    });
  });*/


    import HomePage from '../support/pages/HomePage';
    import ProductsPage from '../support/pages/ProductsPage';

    describe('Test Case 9: Search Product (POM Style)', () => {
    const searchTerm = 'tshirt';

    it('should search for a product and verify the results grid matches the query cleanly using Page Objects', () => {
    // 1. Navigate to the website and open the catalog via HomePage object
    HomePage.visit();
    HomePage.navigateToProducts();

    // 2. Validate product grid landing and trigger search using ProductsPage
    ProductsPage.verifyProductsPageLanding();
    ProductsPage.searchProduct(searchTerm);

    // 3. Verify that search results filter and populate the layout view grid correctly
    ProductsPage.verifySearchedProductsHeader();
    ProductsPage.verifyProductsVisible();
    
    // Extra safety: Check that the product text matches our query case-insensitively
    cy.get('.productinfo p').first().should('include.text', 'Tshirt');
  });
});

  
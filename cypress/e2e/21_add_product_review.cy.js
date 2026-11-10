/*Test Case 21: Add review on product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Click on 'View Product' button
6. Verify 'Write Your Review' is visible
7. Enter name, email and review
8. Click 'Submit' button
9. Verify success message 'Thank you for your review.'*/

/*describe('Test Case 21: Add review on product', () => {
    it('should navigate to product details and submit a product review successfully', () => {
      // 1. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 2 & 3. Click 'Products' button and verify landing on ALL PRODUCTS page
      cy.contains('a', /Products/i).click();
      cy.url().should('include', '/products');
      cy.get('.features_items').should('be.visible').and('contain.text', 'All Products');
  
      // 4. Click on 'View Product' button of the first product on the grid list
      cy.get('.choose a').first().click();
      cy.url().should('include', '/product_details/');
  
      // 5. Verify 'Write Your Review' header heading is visible
      cy.get('a[href="#reviews"]').should('be.visible').and('contain.text', 'Write Your Review');
  
      // 6. Enter name, email and review text into the inputs
      cy.get('input#name').type('Alex Reviewer');
      cy.get('input#email').type('alex.reviews@practice.com');
      cy.get('textarea#review').type('This product has outstanding quality and the automation framework tested it flawlessly.');
  
      // 7. Click 'Submit' button
      cy.get('button#button-review').click();
  
      // 8. Verify success message 'Thank you for your review.' is visible on screen
      cy.get('#review-section .alert-success')
        .should('be.visible')
        .and('contain.text', 'Thank you for your review.');
    });
  });*/


    import HomePage from '../support/pages/HomePage';
    import ProductsPage from '../support/pages/ProductsPage';

    describe('Test Case 21: Add review on product (POM Style)', () => {
    it('should navigate to product details, fill out the review form, and submit it successfully using Page Objects', () => {
    // 1. Navigate to the website home view and go to products catalog
    HomePage.visit();
    HomePage.navigateToProducts();
    ProductsPage.verifyProductsPageLanding();

    // 2. Click 'View Product' for the first item on the grid catalog layout
    ProductsPage.viewFirstProductDetails();

    // 3. Populate review fields and submit the form feedback using Page Objects
    ProductsPage.submitProductReview(
      'Nassim Reviewer',
      'nassim_reviews@practice.com',
      'This product framework automation structure feels rock solid and extremely stable!'
    );

    // 4. Verify that the success alert message pops up perfectly on the layout container
    ProductsPage.verifyReviewSuccess();
  });
});

  
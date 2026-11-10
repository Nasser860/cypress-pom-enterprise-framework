/*Test Case 20: Search Products and Verify Cart After Login
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Enter product name in search input and click search button
6. Verify 'SEARCHED PRODUCTS' is visible
7. Verify all the products related to search are visible
8. Add those products to cart
9. Click 'Cart' button and verify that products are visible in cart
10. Click 'Signup / Login' button and submit login details
11. Again, go to Cart page
12. Verify that those products are visible in cart after login as well*/



    /*describe('Test Case 20: Search Products and Verify Cart After Login', () => {
    const username = 'Cart Migration Alex';
    const dynamicEmail = `cart_move_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';
    const searchTerm = 'tshirt';
  
    it('should search for products, add to cart anonymously, and verify cart persists after logging in', () => {
      // ---- STEP 1: Pre-register the account so it exists in the database ----
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
      cy.contains('a', 'Signup / Login').click();
      
      cy.get('input[data-qa="signup-name"]').type(username);
      cy.get('input[data-qa="signup-email"]').type(dynamicEmail);
      cy.get('button[data-qa="signup-button"]').click();
  
      cy.get('#id_gender1').check();
      cy.get('input[data-qa="password"]').type(password);
      cy.get('input[data-qa="first_name"]').type('Alex');
      cy.get('input[data-qa="last_name"]').type('Migration');
      cy.get('input[data-qa="address"]').type('101 Session Street');
      cy.get('select[data-qa="country"]').select('United States');
      cy.get('input[data-qa="state"]').type('New York');
      cy.get('input[data-qa="city"]').type('New York City');
      cy.get('input[data-qa="zipcode"]').type('10001');
      cy.get('input[data-qa="mobile_number"]').type('5554445555');
      cy.get('button[data-qa="create-account"]').click();
      cy.get('[data-qa="continue-button"]').click();
      
      // Log out cleanly to begin the anonymous search state
      cy.contains('a', 'Logout').click();
  
      // ---- STEP 2: Search products and add to cart anonymously ----
      cy.contains('a', /Products/i).click();
      cy.url().should('include', '/products');
  
      cy.get('input#search_product').type(searchTerm);
      cy.get('button#submit_search').click();
  
      cy.get('.features_items h2.title').should('be.visible').and('contain.text', 'Searched Products');
      cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0);
  
      // FIXED: Target the "Add to Cart" button of the first visible search result grid item
      cy.get('.productinfo .add-to-cart').first().click();
      cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
  
      // Click 'Cart' button and verify that product is visible in cart
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
      
      // FIXED: Verify that at least one row container exists in the cart table list grid
      cy.get('tbody tr').should('have.length.greaterThan', 0);
  
      // ---- STEP 3: Log in and verify cart persistence ----
      cy.contains('a', 'Signup / Login').click();
      cy.get('[data-qa="login-email"]').type(dynamicEmail);
      cy.get('[data-qa="login-password"]').type(password);
      cy.get('[data-qa="login-button"]').click();
  
      // Go to 'Cart' page again
      cy.contains('a', /Cart/i).click();
  
      // Verify that the product is STILL visible in the cart after logging in!
      cy.url().should('include', '/view_cart');
      cy.get('tbody tr').should('have.length.greaterThan', 0);
  
      // ---- STEP 4: Clean up database ----
      cy.get('a[href="/delete_account"]').click();
      cy.get('b').should('contain.text', 'Account Deleted!');
      cy.get('[data-qa="continue-button"]').click();
    });
  });*/


    import HomePage from '../support/pages/HomePage';
    import ProductsPage from '../support/pages/ProductsPage';
    import CartPage from '../support/pages/CartPage';
    import LoginPage from '../support/pages/LoginPage';
    import SignupPage from '../support/pages/SignupPage';

    describe('Test Case 20: Search Products and Verify Cart After Login (POM Style)', () => {
    const searchTerm = 'jeans';
    const password = 'SecurePassword123!';

    it('should verify products remain persistent inside checkout cart after user authentication log in', () => {
    // 1. Open the website catalog view
    HomePage.visit();
    HomePage.navigateToProducts();
    ProductsPage.verifyProductsPageLanding();

    // 2. Input search terms and verify results populate the view grid cleanly
    ProductsPage.searchProduct(searchTerm);
    ProductsPage.verifySearchedProductsHeader();
    ProductsPage.verifyProductsVisible();

    // 3. Add the searched items directly to checkout cart basket
    ProductsPage.addFirstItemToCart();
    ProductsPage.navigateToCartFromModal();
    CartPage.verifyCartPageLanding();

    // 4. Navigate to the login portal using the header nav links
    HomePage.navigateToSignupLogin();
    LoginPage.verifyLoginHeader();

    // 5. Fetch your active account data tokens and perform the user authentication step
    cy.fixture('testUser').then((user) => {
    LoginPage.login(user.email, password);
    cy.get('.navbar-nav').should('contain.text', 'Logged in as');

      // 6. Return straight to the Checkout Cart and verify product remains persistent!
    HomePage.navigateToCart();
    CartPage.verifyCartPageLanding();
    CartPage.cartTableRows.should('have.length.greaterThan', 0);
    });
  });
});

  
  
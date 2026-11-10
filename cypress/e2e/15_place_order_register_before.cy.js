/*Test Case 15: Place Order: Register before Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify ' Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click Proceed To Checkout
12. Verify Address Details and Review Your Order
13. Enter description in comment text area and click 'Place Order'
14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
15. Click 'Pay and Confirm Order' button
16. Verify success message 'Your order has been placed successfully!'
17. Click 'Delete Account' button
18. Verify 'ACCOUNT DELETED!' and click 'Continue' button*/



    /*describe('Test Case 15: Place Order: Register before Checkout', () => {
    const username = 'PreRegister Alex';
    const dynamicEmail = `preregister_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';
  
    it('should complete a purchase lifecycle by registering an account BEFORE entering the cart checkout phase', () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3. Click 'Signup / Login' button
      cy.contains('a', 'Signup / Login').click();
  
      // 4 & 5. Complete full registration flow first
      cy.get('.signup-form h2').should('be.visible').and('contain.text', 'New User Signup!');
      cy.get('input[data-qa="signup-name"]').type(username);
      cy.get('input[data-qa="signup-email"]').type(dynamicEmail);
      cy.get('button[data-qa="signup-button"]').click();
  
      // Fill registration details
      cy.get('#id_gender1').check();
      cy.get('input[data-qa="password"]').type(password);
      cy.get('select[data-qa="days"]').select('15');
      cy.get('select[data-qa="months"]').select('August');
      cy.get('select[data-qa="years"]').select('1995');
      cy.get('input[data-qa="first_name"]').type('Alex');
      cy.get('input[data-qa="last_name"]').type('PreCheckout');
      cy.get('input[data-qa="address"]').type('777 Ahead Boulevard');
      cy.get('select[data-qa="country"]').select('United States');
      cy.get('input[data-qa="state"]').type('New York');
      cy.get('input[data-qa="city"]').type('New York City');
      cy.get('input[data-qa="zipcode"]').type('10001');
      cy.get('input[data-qa="mobile_number"]').type('5551112222');
      cy.get('button[data-qa="create-account"]').click();
      cy.get('b').should('contain.text', 'Account Created!');
      cy.get('[data-qa="continue-button"]').click();
  
      // 6. Verify 'Logged in as username' is visible at the top nav header
      cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);
  
      // 7. Add products to cart from homepage grid now that we are logged in
      cy.get('.productinfo a[data-product-id="1"]').first().click();
      cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
  
      // 8. Click 'Cart' button
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
  
      // 9. Click 'Proceed To Checkout' button
      cy.contains('a', 'Proceed To Checkout').click();
  
      // 10. Verify Delivery Address and Review Your Order elements are visible
      cy.get('#address_delivery').should('be.visible').and('contain.text', 'Your delivery address');
      cy.get('#cart_info').should('be.visible');
  
      // 11. Enter description in comment text area and click 'Place Order'
      cy.get('textarea[name="message"]').type('Pre-registered shopping workflow automated check.');
      cy.contains('a', 'Place Order').click();
  
      // 12 & 13. Enter payment details and submit payment confirmation
      cy.get('[data-qa="name-on-card"]').type('Alex Tester');
      cy.get('[data-qa="card-number"]').type('4242424242424242');
      cy.get('[data-qa="cvc"]').type('422');
      cy.get('[data-qa="expiry-month"]').type('10');
      cy.get('[data-qa="expiry-year"]').type('2031');
      cy.get('[data-qa="pay-button"]').click();
  
      // 14. Verify order checkout confirmation alert success header
      cy.get('[data-qa="order-placed"] b', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Order Placed!');
  
      // 15 & 16. Click 'Delete Account' button to clean up the database layout cleanly
      cy.get('a[href="/delete_account"]').click();
      cy.get('b').should('contain.text', 'Account Deleted!');
      cy.get('[data-qa="continue-button"]').click();
    });
  });*/


    /*import HomePage from '../support/pages/HomePage';
    import LoginPage from '../support/pages/LoginPage';
    import SignupPage from '../support/pages/SignupPage';
    import ProductsPage from '../support/pages/ProductsPage';
    import CartPage from '../support/pages/CartPage';
    import CheckoutPage from '../support/pages/CheckoutPage';

    describe('Test Case 15: Place Order: Register before Checkout (POM Style)', () => {
    const username = 'Register First Alex';
    const dynamicEmail = `reg_before_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';

    it('should create an account first, then complete the checkout lifecycle smoothly using Page Objects', () => {
    // 1. Visit the home screen and navigate to the signup portal
    HomePage.visit();
    HomePage.navigateToSignupLogin();

    // 2. Complete full registration flow BEFORE shopping
    LoginPage.verifySignupHeader();
    LoginPage.fillSignupForm(username, dynamicEmail);
    LoginPage.clickSignup();

    SignupPage.fillAccountDetails(password);
    SignupPage.fillAddressDetails();
    SignupPage.submitProfile();

    // 3. Verify 'Logged in as username' is visible at the top nav header
    cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);

    // 4. Shop for products now that we are officially logged in
    HomePage.navigateToProducts();
    ProductsPage.verifyProductsPageLanding();
    ProductsPage.addFirstItemToCart();
    ProductsPage.navigateToCartFromModal();
    CartPage.verifyCartPageLanding();

    // 5. Click Proceed to Checkout directly
    cy.contains('a', 'Proceed To Checkout').click();

    // 6. Verify delivery addresses match and enter description comments
    CheckoutPage.verifyCheckoutReviewLanding();
    CheckoutPage.submitComment('Pre-registered customer order lifecycle test verification.');

    // 7. Input payment card details and confirm order checkout
    CheckoutPage.fillPaymentDetails('Alex PreRegistered', '4242424242424242', '455', '11', '2031');
    CheckoutPage.confirmPayment();

    // 8. Delete Account to wipe the data clean from the server database
    cy.get('a[href="/delete_account"]').click();
    cy.get('b').should('contain.text', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
  });
});*/


    import HomePage from '../support/pages/HomePage';
    import LoginPage from '../support/pages/LoginPage';
    import SignupPage from '../support/pages/SignupPage';
    import ProductsPage from '../support/pages/ProductsPage';
    import CartPage from '../support/pages/CartPage';
    import CheckoutPage from '../support/pages/CheckoutPage';

    describe('Test Case 16: Place Order: Login before Checkout (POM Style)', () => {
    const username = 'Login Before Alex';
    const dynamicEmail = `login_before_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';

    it('should register, log out, log back in first, and then execute the full checkout process using Page Objects', () => {
    // ---- STEP 1: Pre-register the account profile so it exists in the database ----
    HomePage.visit();
    HomePage.navigateToSignupLogin();
    LoginPage.verifySignupHeader();
    LoginPage.fillSignupForm(username, dynamicEmail);
    LoginPage.clickSignup();

    SignupPage.fillAccountDetails(password);
    SignupPage.fillAddressDetails();
    SignupPage.submitProfile();
    
    // Log out cleanly to begin the "Login Before Checkout" scenario state
    SignupPage.logout();

    // ---- STEP 2: Log back in right at the start of the test flow ----
    HomePage.navigateToSignupLogin();
    LoginPage.verifyLoginHeader();
    LoginPage.login(dynamicEmail, password);
    cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);

    // ---- STEP 3: Add products to cart as a logged-in user ----
    HomePage.navigateToProducts();
    ProductsPage.verifyProductsPageLanding();
    ProductsPage.addFirstItemToCart();
    ProductsPage.navigateToCartFromModal();
    CartPage.verifyCartPageLanding();

    // ---- STEP 4: Complete the checkout lifecycle ----
    cy.contains('a', 'Proceed To Checkout').click();
    CheckoutPage.verifyCheckoutReviewLanding();
    CheckoutPage.submitComment('Logged-in user order lifecycle test verification.');

    CheckoutPage.fillPaymentDetails('Alex LoggedInBefore', '4242424242424242', '777', '10', '2032');
    CheckoutPage.confirmPayment();

    // ---- STEP 5: Clean up database ----
    cy.get('a[href="/delete_account"]').click();
    cy.get('b').should('contain.text', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
  });
});


  
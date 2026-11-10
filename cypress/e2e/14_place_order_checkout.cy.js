/*Test Case 14: Place Order: Register while Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click Proceed To Checkout
8. Click 'Register / Login' button
9. Fill all details in Signup and create account
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
11. Verify ' Logged in as username' at top
12.Click 'Cart' button
13. Click 'Proceed To Checkout' button
14. Verify Address Details and Review Your Order
15. Enter description in comment text area and click 'Place Order'
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
17. Click 'Pay and Confirm Order' button
18. Verify success message 'Your order has been placed successfully!'
19. Click 'Delete Account' button
20. Verify 'ACCOUNT DELETED!' and click 'Continue' button*/



/*describe('Test Case 14: Place Order: Register while Checkout', () => {
    const username = 'Checkout Alex';
    const dynamicEmail = `checkout_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';
  
    it('should complete a purchase lifecycle by registering during the checkout phase', () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3. Add first product to cart from homepage grid
      cy.get('.productinfo a[data-product-id="1"]').first().click();
      cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
      
      // 4. Click 'View Cart' link text on the success modal popup
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
  
      // 5. Click 'Proceed To Checkout'
      cy.contains('a', 'Proceed To Checkout').click();
  
      // 6. Click 'Register / Login' button on the modal popup window container
      cy.get('.modal-body').contains('u', 'Register / Login').click();
  
      // 7. Complete full user registration flow
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
      cy.get('input[data-qa="last_name"]').type('Checkout');
      cy.get('input[data-qa="address"]').type('404 Pipeline Road');
      cy.get('select[data-qa="country"]').select('United States');
      cy.get('input[data-qa="state"]').type('New York');
      cy.get('input[data-qa="city"]').type('New York City');
      cy.get('input[data-qa="zipcode"]').type('10001');
      cy.get('input[data-qa="mobile_number"]').type('5559876543');
      cy.get('button[data-qa="create-account"]').click();
      cy.get('b').should('contain.text', 'Account Created!');
      cy.get('[data-qa="continue-button"]').click();
  
      // 8. Verify 'Logged in as username' is visible in header nav panel
      cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);
  
      // 9. Go back to Cart page
      cy.contains('a', /Cart/i).click();
  
      // 10. Click 'Proceed To Checkout' button again
      cy.contains('a', 'Proceed To Checkout').click();
  
      // 11. Verify Delivery Address headers are visible on screen
      cy.get('#address_delivery').should('be.visible').and('contain.text', 'Your delivery address');
      cy.get('#cart_info').should('be.visible'); // Review Order Section
  
      // 12. Enter text comments into the delivery instructions field and click 'Place Order'
      cy.get('textarea[name="message"]').type('Leave package at front gate. Automated delivery test.');
      cy.contains('a', 'Place Order').click();
  
      // 13 & 14. Input payment card variables and submit payment confirmation form
      cy.get('[data-qa="name-on-card"]').type('Alex Tester');
      cy.get('[data-qa="card-number"]').type('4242424242424242');
      cy.get('[data-qa="cvc"]').type('311');
      cy.get('[data-qa="expiry-month"]').type('12');
      cy.get('[data-qa="expiry-year"]').type('2030');
      cy.get('[data-qa="pay-button"]').click();
  
      // 15. Verify order checkout confirmation alert success header
      cy.get('[data-qa="order-placed"] b', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Order Placed!');
  
      // 16 & 17. Click 'Delete Account' button to clean up the database
      cy.get('a[href="/delete_account"]').click();
      cy.get('b').should('contain.text', 'Account Deleted!');
      cy.get('[data-qa="continue-button"]').click();
    });
  });*/


    import HomePage from '../support/pages/HomePage';
    import ProductsPage from '../support/pages/ProductsPage';
    import LoginPage from '../support/pages/LoginPage';
    import SignupPage from '../support/pages/SignupPage';
    import CartPage from '../support/pages/CartPage';
    import CheckoutPage from '../support/pages/CheckoutPage';

    describe('Test Case 14: Place Order: Register while Checkout (POM Style)', () => {
    const username = 'Checkout Alex';
    const dynamicEmail = `checkout_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';

    it('should complete a purchase lifecycle by registering during the checkout phase using Page Objects', () => {
    // 1. Visit the home page and add the first product to cart
    HomePage.visit();
    ProductsPage.addFirstItemToCart();
    ProductsPage.navigateToCartFromModal();
    CartPage.verifyCartPageLanding();

    // 2. Proceed to checkout and move to registration portal link container
    cy.contains('a', 'Proceed To Checkout').click();
    cy.get('.modal-body').contains('u', 'Register / Login').click();

    // 3. Complete user registration flow
    LoginPage.verifySignupHeader();
    LoginPage.fillSignupForm(username, dynamicEmail);
    LoginPage.clickSignup();

    SignupPage.fillAccountDetails(password);
    SignupPage.fillAddressDetails();
    SignupPage.submitProfile();

    // 4. Verify 'Logged in as username' is visible in header nav panel
    cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);

    // 5. Go back to Cart page and proceed to checkout again
    HomePage.navigateToCart();
    cy.contains('a', 'Proceed To Checkout').click();

    // 6. Verify delivery addresses and enter comments
    CheckoutPage.verifyCheckoutReviewLanding();
    CheckoutPage.submitComment('Leave package at front gate. Automated delivery test.');

    // 7. Input payment card details and confirm order
    CheckoutPage.fillPaymentDetails('Alex Tester', '4242424242424242', '311', '12', '2030');
    CheckoutPage.confirmPayment();

    // 8. Delete Account to clean up database state entries cleanly
    //SignupPage.logoutLink.click(); // Using the existing navbar deletion routing links safely
    cy.get('a[href="/delete_account"]').click();
    cy.get('b').should('contain.text', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
  });
});

  
/*Test Case 16: Place Order: Login before Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill email, password and click 'Login' button
6. Verify 'Logged in as username' at top
7. Add products to cart
8. Click 'Cart' button
9. Verify that cart page is displayed
10. Click Proceed To Checkout
11. Verify Address Details and Review Your Order
12. Enter description in comment text area and click 'Place Order'
13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
14. Click 'Pay and Confirm Order' button
15. Verify success message 'Your order has been placed successfully!'
16. Click 'Delete Account' button
17. Verify 'ACCOUNT DELETED!' and click 'Continue' button*/

describe('Test Case 16: Place Order: Login before Checkout', () => {
    const username = 'Returning Alex';
    const dynamicEmail = `returning_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';
  
    it('should register, log out, log back in, and then complete the checkout purchase lifecycle', () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3. Click 'Signup / Login' button
      cy.contains('a', 'Signup / Login').click();
  
      // 4 & 5. Complete full registration flow first to create the account
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
      cy.get('input[data-qa="last_name"]').type('LoginCheckout');
      cy.get('input[data-qa="address"]').type('999 Returning Way');
      cy.get('select[data-qa="country"]').select('United States');
      cy.get('input[data-qa="state"]').type('New York');
      cy.get('input[data-qa="city"]').type('New York City');
      cy.get('input[data-qa="zipcode"]').type('10001');
      cy.get('input[data-qa="mobile_number"]').type('5552223333');
      cy.get('button[data-qa="create-account"]').click();
      cy.get('b').should('contain.text', 'Account Created!');
      cy.get('[data-qa="continue-button"]').click();
  
      // 6. Verify 'Logged in as username' is visible at the top nav header
      cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);
  
      // 7. Click 'Logout' button to end the initial session cleanly
      cy.contains('a', 'Logout').click();
  
      // 8. Enter correct email address and password to log back in as a returning customer
      cy.get('[data-qa="login-email"]').type(dynamicEmail);
      cy.get('[data-qa="login-password"]').type(password);
      cy.get('[data-qa="login-button"]').click();
  
      // 9. Verify 'Logged in as username' is visible at the top nav header again
      cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);
  
      // 10. Add products to cart from homepage grid now that we are officially logged back in
      cy.get('.productinfo a[data-product-id="1"]').first().click();
      cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
  
      // 11. Click 'Cart' button
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
  
      // 12. Click 'Proceed To Checkout' button
      cy.contains('a', 'Proceed To Checkout').click();
  
      // 13. Verify Delivery Address and Review Your Order elements are visible
      cy.get('#address_delivery').should('be.visible').and('contain.text', 'Your delivery address');
      cy.get('#cart_info').should('be.visible');
  
      // 14. Enter description in comment text area and click 'Place Order'
      cy.get('textarea[name="message"]').type('Returning customer workflow automated check.');
      cy.contains('a', 'Place Order').click();
  
      // 15 & 16. Enter payment details and submit payment confirmation
      cy.get('[data-qa="name-on-card"]').type('Alex Tester');
      cy.get('[data-qa="card-number"]').type('4242424242424242');
      cy.get('[data-qa="cvc"]').type('555');
      cy.get('[data-qa="expiry-month"]').type('11');
      cy.get('[data-qa="expiry-year"]').type('2032');
      cy.get('[data-qa="pay-button"]').click();
  
      // 17. Verify order checkout confirmation alert success header
      cy.get('[data-qa="order-placed"] b', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Order Placed!');
  
      // 18 & 19. Click 'Delete Account' button to clean up the database layout cleanly
      cy.get('a[href="/delete_account"]').click();
      cy.get('b').should('contain.text', 'Account Deleted!');
      cy.get('[data-qa="continue-button"]').click();
    });
  });
  
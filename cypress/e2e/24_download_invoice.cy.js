/*Test Case 24: Download Invoice after purchase order
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
19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
20. Click 'Continue' button
21. Click 'Delete Account' button
22. Verify 'ACCOUNT DELETED!' and click 'Continue' button*/



/*describe('Test Case 24: Download Invoice after purchase order', () => {
    const username = 'Invoice Alex';
    const dynamicEmail = `invoice_down_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';
  
    it('should complete the full order flow and verify the invoice download link button', () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3. Add first product to cart from homepage grid
      cy.get('.productinfo a[data-product-id="1"]').first().click();
      cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
      
      // 4. Click 'View Cart' link text on the success modal popup and verify landing
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
      cy.get('tbody tr').should('have.length.greaterThan', 0);
  
      // 5. Click 'Proceed To Checkout' and move to registration portal link container
      cy.contains('a', 'Proceed To Checkout').click();
      cy.get('.modal-body').contains('u', 'Register / Login').click();
  
      // 6 & 7. Fill registration forms to create the profile state entry cleanly
      cy.get('.signup-form h2').should('be.visible').and('contain.text', 'New User Signup!');
      cy.get('input[data-qa="signup-name"]').type(username);
      cy.get('input[data-qa="signup-email"]').type(dynamicEmail);
      cy.get('button[data-qa="signup-button"]').click();
  
      cy.get('#id_gender1').check();
      cy.get('input[data-qa="password"]').type(password);
      cy.get('input[data-qa="first_name"]').type('Alex');
      cy.get('input[data-qa="last_name"]').type('Invoice');
      cy.get('input[data-qa="address"]').type('999 Download Street');
      cy.get('select[data-qa="country"]').select('United States');
      cy.get('input[data-qa="state"]').type('New York');
      cy.get('input[data-qa="city"]').type('New York City');
      cy.get('input[data-qa="zipcode"]').type('10001');
      cy.get('input[data-qa="mobile_number"]').type('5558889999');
      cy.get('button[data-qa="create-account"]').click();
      cy.get('b').should('contain.text', 'Account Created!');
      cy.get('[data-qa="continue-button"]').click();
  
      // 8. Verify 'Logged in as username' is visible at the top nav header
      cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);
  
      // 9. Click 'Cart' button again and click 'Proceed To Checkout' button
      cy.contains('a', /Cart/i).click();
      cy.contains('a', 'Proceed To Checkout').click();
  
      // 10. Verify Delivery Address and Review Your Order components display cleanly
      cy.get('#address_delivery').should('be.visible').and('contain.text', 'Your delivery address');
      cy.get('#cart_info').should('be.visible');
  
      // 11. Enter description text comments into the field and click 'Place Order'
      cy.get('textarea[name="message"]').type('Invoice system automated download test verification script.');
      cy.contains('a', 'Place Order').click();
  
      // 12 & 13. Enter payment details and click payment confirmation form button
      cy.get('[data-qa="name-on-card"]').type('Alex Tester');
      cy.get('[data-qa="card-number"]').type('4242424242424242');
      cy.get('[data-qa="cvc"]').type('999');
      cy.get('[data-qa="expiry-month"]').type('12');
      cy.get('[data-qa="expiry-year"]').type('2033');
      cy.get('[data-qa="pay-button"]').click();
  
      // 14. Verify order checkout confirmation alert success header text string
      cy.get('[data-qa="order-placed"] b', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Order Placed!');
  
      // 15. Verify 'Download Invoice' button link exists and targets the text invoice document asset
      cy.get('.btn-default.check_out')
        .should('be.visible')
        .and('contain.text', 'Download Invoice')
        .and('have.attr', 'href'); // Confirms the link has an active path target code asset string attached
  
      // 16. Click 'Continue' button on the order confirmation screen view panel
      cy.get('[data-qa="continue-button"]').click();
  
      // 17 & 18. Click 'Delete Account' button to clean up the database layout cleanly
      cy.get('a[href="/delete_account"]').click();
      cy.get('b').should('contain.text', 'Account Deleted!');
      cy.get('[data-qa="continue-button"]').click();
    });
  });*/


  import HomePage from '../support/pages/HomePage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';

describe('Test Case 24: Download Invoice after purchase order (POM)', () => {
  const uniqueEmail = `invoice_user_${Date.now()}@practice.com`;
  
  const userProfile = {
    firstName: 'Nassim',
    lastName: 'InvoiceTester',
    company: 'Framework Co',
    address1: '789 Download Way',
    address2: 'Floor 1',
    city: 'New York',
    state: 'NY',
    zip: '10003',
    country: 'United States',
    phone: '1112223333'
  };

  it('should successfully cycle through checkout, process credit validation, and confirm download of the text invoice layout', () => {
    // 1. Setup session profile
    HomePage.visit();
    HomePage.navigateToSignupLogin();
    
    cy.get('[data-qa="signup-name"]').type(userProfile.firstName);
    cy.get('[data-qa="signup-email"]').type(uniqueEmail);
    cy.get('[data-qa="signup-button"]').click();

    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('InvoicePass123!');
    cy.get('[data-qa="first_name"]').type(userProfile.firstName);
    cy.get('[data-qa="last_name"]').type(userProfile.lastName);
    cy.get('[data-qa="company"]').type(userProfile.company);
    cy.get('[data-qa="address"]').type(userProfile.address1);
    cy.get('[data-qa="address2"]').type(userProfile.address2);
    cy.get('[data-qa="country"]').select(userProfile.country);
    cy.get('[data-qa="state"]').type(userProfile.state);
    cy.get('[data-qa="city"]').type(userProfile.city);
    cy.get('[data-qa="zipcode"]').type(userProfile.zip);
    cy.get('[data-qa="mobile_number"]').type(userProfile.phone);
    cy.get('[data-qa="create-account"]').click();

    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click({ force: true });

    // 2. Add product to cart layout
    HomePage.navigateToProducts();
    ProductsPage.viewFirstProductDetails();
    cy.get('button.cart').click(); 
    cy.get('.modal-content a[href="/view_cart"]').click();
    
    // 3. Move to Checkout and process confirmation
    CartPage.verifyCartPageLanding();
    CartPage.proceedToCheckout();

    // 4. Fill comments, place order, and supply card values
    CheckoutPage.submitComment('Automating invoice download streams.');
    CheckoutPage.fillPaymentDetails('Nassim Tester', '4111222233334444', '123', '12', '2028');
    CheckoutPage.confirmPayment(); // Triggers the 'Order Placed!' step internally

    // 5 & 6. Download PDF validation logic from page object code
    CheckoutPage.downloadInvoiceAndContinue();

    // 7. Post-execution Cleanup
    cy.get('a[href="/delete_account"]').click();
    cy.get('[data-qa="account-deleted"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  });
});

  
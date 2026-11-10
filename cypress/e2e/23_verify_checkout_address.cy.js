/*Test Case 23: Verify address details in checkout page
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
12. Verify that the delivery address is same address filled at the time registration of account
13. Verify that the billing address is same address filled at the time registration of account
14. Click 'Delete Account' button
15. Verify 'ACCOUNT DELETED!' and click 'Continue' button*/

/*describe('Test Case 23: Verify address details in checkout page', () => {
    const username = 'Address Alex';
    const dynamicEmail = `address_check_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';
    const streetAddress = '555 Validation Street'; // The specific address line we will test
  
    it('should verify the delivery address matches the registration address profile perfectly', () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3. Click 'Signup / Login' button and register a new user profile
      cy.contains('a', 'Signup / Login').click();
      cy.get('input[data-qa="signup-name"]').type(username);
      cy.get('input[data-qa="signup-email"]').type(dynamicEmail);
      cy.get('button[data-qa="signup-button"]').click();
  
      // 4. Fill required user profile forms
      cy.get('#id_gender1').check();
      cy.get('input[data-qa="password"]').type(password);
      cy.get('input[data-qa="first_name"]').type('Alex');
      cy.get('input[data-qa="last_name"]').type('Address');
      cy.get('input[data-qa="address"]').type(streetAddress); // Entering our tracking address line here
      cy.get('select[data-qa="country"]').select('United States');
      cy.get('input[data-qa="state"]').type('New York');
      cy.get('input[data-qa="city"]').type('New York City');
      cy.get('input[data-qa="zipcode"]').type('10001');
      cy.get('input[data-qa="mobile_number"]').type('5556667777');
      cy.get('button[data-qa="create-account"]').click();
      cy.get('b').should('contain.text', 'Account Created!');
      cy.get('[data-qa="continue-button"]').click();
  
      // 5. Verify 'Logged in as username' is visible at the top
      cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);
  
      // 6 & 7. Add products to cart and navigate to the cart checkout page list grid
      cy.get('.productinfo a[data-product-id="1"]').first().click();
      cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
      cy.contains('u', 'View Cart').click();
      cy.url().should('include', '/view_cart');
  
      // 8. Click 'Proceed To Checkout'
      cy.contains('a', 'Proceed To Checkout').click();
  
      // 9. Verify that the Delivery Address block matches the address entered during registration
      // We target the specific list item inside the delivery block layout 
      cy.get('#address_delivery .address_address1')
        .should('be.visible')
        .and('contain.text', streetAddress);
  
      // 10. Click 'Delete Account' button to cleanly wipe out database profile state entries
      cy.get('a[href="/delete_account"]').click();
      cy.get('b').should('contain.text', 'Account Deleted!');
      cy.get('[data-qa="continue-button"]').click();
    });
  });*/

    import HomePage from '../support/pages/HomePage';
    import ProductsPage from '../support/pages/ProductsPage';
    import CartPage from '../support/pages/CartPage';
    import CheckoutPage from '../support/pages/CheckoutPage';

    Cypress.on('uncaught:exception', () => false);

    describe('Test Case 23: Verify address details in checkout page (POM)', () => {
  const uniqueEmail = `user_test_${Date.now()}@practice.com`;
  
  const registrationProfile = {
    firstName: 'Nassim',
    lastName: 'Tester',
    company: 'Framework Co',
    address1: '456 Automation Rd',
    address2: 'Apt 2B',
    city: 'New York',
    state: 'NY',
    zip: '10002',
    country: 'United States',
    phone: '9876543210'
  };

  it('should navigate through account initialization and map shipping address variables correctly', () => {
    // 1. Launch & Navigate
    HomePage.visit();
    HomePage.navigateToSignupLogin();
    
        // 2. Perform Quick Signup UI actions - FIXED SELECTORS FROM data-testid TO data-qa
        cy.get('[data-qa="signup-name"]').type(registrationProfile.firstName);
        cy.get('[data-qa="signup-email"]').type(uniqueEmail);
        cy.get('[data-qa="signup-button"]').click();
    
        // Fill Mandatory Registration inputs
        cy.get('#id_gender1').check();
        cy.get('[data-qa="password"]').type('TestPass123!');
        cy.get('[data-qa="first_name"]').type(registrationProfile.firstName);
        cy.get('[data-qa="last_name"]').type(registrationProfile.lastName);
        cy.get('[data-qa="company"]').type(registrationProfile.company);
        cy.get('[data-qa="address"]').type(registrationProfile.address1);
        cy.get('[data-qa="address2"]').type(registrationProfile.address2);
        cy.get('[data-qa="country"]').select(registrationProfile.country);
        cy.get('[data-qa="state"]').type(registrationProfile.state);
        cy.get('[data-qa="city"]').type(registrationProfile.city);
        cy.get('[data-qa="zipcode"]').type(registrationProfile.zip);
        cy.get('[data-qa="mobile_number"]').type(registrationProfile.phone);
        cy.get('[data-qa="create-account"]').click();
    
        // Confirm Registration Complete
        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click({ force: true });
    
    // 3. Select Item and Proceed to cart info view
    HomePage.navigateToProducts();
    ProductsPage.verifyProductsPageLanding();
    ProductsPage.viewFirstProductDetails();
    
    // Add product to container profile
    cy.get('button.cart').click(); 
    cy.get('.modal-content a[href="/view_cart"]').click();
    
    // 4. Validate Delivery Mapping
    CartPage.verifyCartPageLanding();
    CartPage.proceedToCheckout(); // Ensure you have proceedToCheckout() in your CartPage actions!

    // Verify Address Layout Details using updated page object block
    CheckoutPage.verifyCheckoutReviewLanding();
    CheckoutPage.verifyAddressDetails(registrationProfile);

    // 5. Cleanup Database State
    cy.get('a[href="/delete_account"]').click();
    // Replace lines 144 and 145 in cypress/e2e/23_verify_checkout_address.cy.js with this:

cy.get('[data-qa="account-deleted"]').should('be.visible');
cy.get('[data-qa="continue-button"]').click();

  });
});

  
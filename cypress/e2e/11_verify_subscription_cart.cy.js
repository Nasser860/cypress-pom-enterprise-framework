/*Test Case 11: Verify Subscription in Cart page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Cart' button
5. Scroll down to footer
6. Verify text 'SUBSCRIPTION'
7. Enter email address in input and click arrow button
8. Verify success message 'You have been successfully subscribed!' is visible*/



/*describe('Test Case 11: Verify Subscription in Cart page', () => {
    it('should successfully subscribe using the subscription form on the Cart page', () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3. Click on 'Cart' button in the header nav
      cy.contains('a', /Cart/i).click();
  
      // 4 & 5. Scroll down to footer and verify 'SUBSCRIPTION' header text
      cy.scrollTo('bottom');
      cy.get('#footer h2').should('be.visible').and('contain.text', 'Subscription');
  
      // 6. Enter email address in input and click the arrow submit button
      cy.get('input#susbscribe_email').type('cart_tester@practice.com');
      cy.get('button#subscribe').click();
  
      // 7. Verify success message 'You have been successfully subscribed!' is visible
      cy.get('.alert-success')
        .should('be.visible')
        .and('contain.text', 'You have been successfully subscribed!');
    });
  });*/


    import HomePage from '../support/pages/HomePage';
    import CartPage from '../support/pages/CartPage';

    describe('Test Case 11: Verify Subscription in Cart page (POM Style)', () => {
    it('should navigate to the Cart page and subscribe successfully inside the footer using Page Objects', () => {
    // 1. Visit the home screen and navigate to the Cart view via HomePage
    HomePage.visit();
    HomePage.navigateToCart();

    // 2. Verify landing properties on the Cart view screen
    CartPage.verifyCartPageLanding();

    // 3. Force viewport down to the footer layout box and trigger form submission loops
    CartPage.scrollToFooter();
    CartPage.subscribeUser('cart_tester_pom@practice.com');

    // 4. Validate alert success notice text strings
    CartPage.verifySubscriptionSuccess();
  });
});

  
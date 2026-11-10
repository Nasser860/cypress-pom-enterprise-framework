/*Test Case 10: Verify Subscription in home page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible
*/



/*describe('Test Case 10: Verify Subscription in home page', () => {
    it('should successfully subscribe using the footer subscription form', () => {
      // 1 & 2. Navigate securely using HTTPS and check the loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 3 & 4. Scroll down to the footer and verify 'SUBSCRIPTION' header text
      // cy.scrollTo('bottom') forces the browser viewport down instantly
      cy.scrollTo('bottom');
      cy.get('#footer h2').should('be.visible').and('contain.text', 'Subscription');
  
      // 5. Enter email address in input and click the arrow submit button
      cy.get('input#susbscribe_email').type('tester_nassim@practice.com');
      cy.get('button#subscribe').click();
  
      // 6. Verify success message 'You have been successfully subscribed!' is visible
      cy.get('.alert-success')
        .should('be.visible')
        .and('contain.text', 'You have been successfully subscribed!');
    });
  });*/


    import HomePage from '../support/pages/HomePage';

    describe('Test Case 10: Verify Subscription in home page (POM Style)', () => {
    it('should scroll to the footer and subscribe successfully using Page Objects', () => {
    // 1. Open the landing view screen matrix
    HomePage.visit();

    // 2. Force the viewport down to the footer layout block
    HomePage.scrollToFooter();

    // 3. Populate email credentials and trigger subscription form submit loop
    HomePage.subscribeUser('tester_nassim_pom@practice.com');

    // 4. Validate subscription success alert banner text properties
    HomePage.verifySubscriptionSuccess();
  });
});

  
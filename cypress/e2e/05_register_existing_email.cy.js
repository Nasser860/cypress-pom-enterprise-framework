/*Test Case 5: Register User with existing email
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible*/



/*describe('Test Case 5: Register User with existing email', () => {
    const username = 'Duplicate Test';
    // Create a brand new email that is guaranteed to exist for this test block
    const email = `duplicate_test_${Date.now()}@practice.com`;
  
    it('should display an error message when registering with an existing email', () => {
      // ---- STEP 1: Register the email first to make it "existing" ----
      cy.visit('http://automationexercise.com');
      cy.contains('a', 'Signup / Login').click();
      cy.get('input[data-qa="signup-name"]').type(username);
      cy.get('input[data-qa="signup-email"]').type(email);
      cy.get('button[data-qa="signup-button"]').click();
  
      // Fill minimal details to quickly save it to the database
      cy.get('#id_gender1').check();
      cy.get('input[data-qa="password"]').type('Password123!');
      cy.get('input[data-qa="first_name"]').type('Duplicate');
      cy.get('input[data-qa="last_name"]').type('User');
      cy.get('input[data-qa="address"]').type('123 Existing Lane');
      cy.get('select[data-qa="country"]').select('United States');
      cy.get('input[data-qa="state"]').type('New York');
      cy.get('input[data-qa="city"]').type('New York City');
      cy.get('input[data-qa="zipcode"]').type('10001');
      cy.get('input[data-qa="mobile_number"]').type('5550001111');
      cy.get('button[data-qa="create-account"]').click();
      cy.get('[data-qa="continue-button"]').click();
      
      // Log out so we can try to sign up again
      cy.contains('a', 'Logout').click();
  
      // ---- STEP 2: Try to register with the exact same email again ----
      cy.contains('a', 'Signup / Login').click();
      cy.get('.signup-form h2').should('contain.text', 'New User Signup!');
      
      // Type the duplicate details
      cy.get('input[data-qa="signup-name"]').type(username);
      cy.get('input[data-qa="signup-email"]').type(email);
      cy.get('button[data-qa="signup-button"]').click();
  
      // ---- STEP 3: Verify the warning message appears ----
      // Target the specific paragraph with styles under the email input field
      cy.get('.signup-form p')
        .should('be.visible')
        .and('contain.text', 'Email Address already exist!');
    });
  });*/


    import HomePage from '../support/pages/HomePage';
    import LoginPage from '../support/pages/LoginPage';

    describe('Test Case 5: Register User with existing email (POM Style)', () => {
    const duplicateName = 'Alex Duplicate';

    it('should attempt registration with an already registered email and verify the error banner', () => {
    // 1. Fetch your existing email address from the fixture bridge file
    cy.fixture('testUser').then((user) => {
      
      // 2. Navigate to the signup screen using Page Objects
      HomePage.visit();
      HomePage.navigateToSignupLogin();
      
      // 3. Attempt signup using the duplicate email credentials
      LoginPage.verifySignupHeader();
      LoginPage.fillSignupForm(duplicateName, user.email);
      LoginPage.clickSignup();

      // 4. Verify that the website flags the error message display cleanly
      cy.get('.signup-form')
        .should('be.visible')
        .and('contain.text', 'Email Address already exist!');
    });
  });
});

  
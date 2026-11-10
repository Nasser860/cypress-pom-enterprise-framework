/*Test Case 4: Logout User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page*/



/*describe('Test Case 4: Logout User', () => {
    const username = 'Alex LogoutTest';
    // Generates a completely new email so registration never hits an "Email already exists" block
    const email = `logout_test_${Date.now()}@practice.com`;
    const password = 'SecurePassword123!';
  
    it('should register a user, log in, and then log out successfully', () => {
      // ---- PREREQUISITE: Create the account to log into ----
      cy.visit('http://automationexercise.com');
      cy.get('#slider-carousel').should('be.visible');
      cy.contains('a', 'Signup / Login').click();
      cy.get('input[data-qa="signup-name"]').type(username);
      cy.get('input[data-qa="signup-email"]').type(email);
      cy.get('button[data-qa="signup-button"]').click();
  
      // Fill minimal required details to register
      cy.get('#id_gender1').check();
      cy.get('input[data-qa="password"]').type(password);
      cy.get('input[data-qa="first_name"]').type('Alex');
      cy.get('input[data-qa="last_name"]').type('Logout');
      cy.get('input[data-qa="address"]').type('123 Shortcut Lane');
      cy.get('select[data-qa="country"]').select('United States');
      cy.get('input[data-qa="state"]').type('California');
      cy.get('input[data-qa="city"]').type('Los Angeles');
      cy.get('input[data-qa="zipcode"]').type('90001');
      cy.get('input[data-qa="mobile_number"]').type('5559876543');
      cy.get('button[data-qa="create-account"]').click();
      cy.get('[data-qa="continue-button"]').click();
      
      // Log out from the registration session to start the official test step flow
      cy.contains('a', 'Logout').click();
  
      // ---- ACTUAL TEST CASE 4 STEPS ----
      // 1 & 2. Launch browser and Navigate to url
      cy.visit('http://automationexercise.com');
  
      // 3. Verify that home page is visible successfully
      cy.get('#slider-carousel').should('be.visible');
  
      // 4. Click on 'Signup / Login' button
      cy.contains('a', 'Signup / Login').click();
  
      // 5. Verify 'Login to your account' is visible
      cy.get('.login-form h2').should('contain.text', 'Login to your account');
  
      // 6. Enter correct email address and password
      cy.get('[data-qa="login-email"]').type(email);
      cy.get('[data-qa="login-password"]').type(password);
  
      // 7. Click 'login' button
      cy.get('[data-qa="login-button"]').click();
  
      // 8. Verify that 'Logged in as username' is visible
      cy.get('.navbar-nav').should('contain.text', `Logged in as ${username}`);
  
      // 9. Click 'Logout' button
      cy.contains('a', 'Logout').click();
  
      // 10. Verify that user is navigated to login page
      cy.url().should('include', '/login');
      cy.get('.login-form h2').should('contain.text', 'Login to your account');
    });
  });*/


  import HomePage from '../support/pages/HomePage';
  import LoginPage from '../support/pages/LoginPage';
  import SignupPage from '../support/pages/SignupPage';

  describe('Test Case 4: Logout User (POM Style)', () => {
  const password = 'SecurePassword123!';

  it('should log in a user and then log them out successfully using Page Objects', () => {
    // 1. Read email from the shared fixture data bridge
    cy.fixture('testUser').then((user) => {
      
      // 2. Log in using Page Objects
      HomePage.visit();
      HomePage.navigateToSignupLogin();
      LoginPage.verifyLoginHeader();
      LoginPage.login(user.email, password);

      // 3. Confirm active logged-in state dashboard wrapper properties
      cy.get('.navbar-nav').should('contain.text', 'Logged in as');

      // 4. Trigger the logout function via our SignupPage navigation utilities
      SignupPage.logout();

      // 5. Verify the user lands back securely on the authentication screen login form layout
      LoginPage.verifyLoginHeader();
    });
  });
});

  
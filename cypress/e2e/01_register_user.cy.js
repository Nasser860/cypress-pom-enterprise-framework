/*Test Case 1: Register User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
*/




/*describe('Test Case 1: Register User successfully', () => {
  const username = 'Alex Traversal';
  const password = 'SecurePassword123!';
  const dynamicEmail = `alex_${Date.now()}@practice.com`;

  it('should register a new user account and save the email', () => {
    // 1. Write the email to the fixture file right away
    cy.writeFile('cypress/fixtures/testUser.json', { email: dynamicEmail });

    // 2. Launch browser with fail-safe network options
    cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
    
    // Ensure the page carousel loads completely before moving forward
    cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');

    // 3. Go to Signup
    cy.contains('a', 'Signup / Login').click();
    
    // Guard clause: Wait for the signup form title to appear before typing
    cy.get('.signup-form h2', { timeout: 15000 })
      .should('be.visible')
      .and('contain.text', 'New User Signup!');

    // Now it's perfectly safe to type!
    cy.get('input[data-qa="signup-name"]').type(username);
    cy.get('input[data-qa="signup-email"]').type(dynamicEmail);
    cy.get('button[data-qa="signup-button"]').click();

    // ... (Keep the rest of your address/creation steps exactly the same as before!)


    // 4. Fill account information
    cy.get('#id_gender1').check();
    cy.get('input[data-qa="password"]').type(password);
    cy.get('select[data-qa="days"]').select('15');
    cy.get('select[data-qa="months"]').select('August');
    cy.get('select[data-qa="years"]').select('1995');

    // 5. Fill address info
    cy.get('input[data-qa="first_name"]').type('Alex');
    cy.get('input[data-qa="last_name"]').type('Rivera');
    cy.get('input[data-qa="address"]').type('123 Selector Way');
    cy.get('select[data-qa="country"]').select('United States');
    cy.get('input[data-qa="state"]').type('New York');
    cy.get('input[data-qa="city"]').type('New York City');
    cy.get('input[data-qa="zipcode"]').type('10001');
    cy.get('input[data-qa="mobile_number"]').type('5551234567');
    
    // 6. Submit and verify success
    cy.get('button[data-qa="create-account"]').click();
    cy.get('b').should('contain.text', 'Account Created!');
    cy.get('[data-qa="continue-button"]').click();

    // 7. Log out cleanly so the next file starts fresh
    cy.contains('a', 'Logout').click();
  });
});*/

import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import SignupPage from '../support/pages/SignupPage';

describe('Test Case 1: Register User successfully (Complete POM Style)', () => {
  const username = 'Alex Traversal';
  const password = 'SecurePassword123!';
  const dynamicEmail = `alex_${Date.now()}@practice.com`;

  it('should register a new user account cleanly using Page Objects', () => {
    // 1. Establish data bridge email token
    cy.writeFile('cypress/fixtures/testUser.json', { email: dynamicEmail });

    // 2. Use HomePage to navigate safely
    HomePage.visit();
    HomePage.navigateToSignupLogin();

    // 3. Use LoginPage to handle initial sign up step
    LoginPage.verifySignupHeader();
    LoginPage.fillSignupForm(username, dynamicEmail);
    LoginPage.clickSignup();

    // 4. Use SignupPage to fill out the comprehensive profile form fields
    SignupPage.fillAccountDetails(password);
    SignupPage.fillAddressDetails();
    SignupPage.submitProfile();

    // 5. Log out cleanly so subsequent tests start fresh
    SignupPage.logout();
  });
});



  
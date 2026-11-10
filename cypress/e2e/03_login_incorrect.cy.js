/*Test Case 3: Login User with incorrect email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible*/



/*describe('Test Case 3: Login User with incorrect email and password', () => {
    it('should display an error message when logging in with invalid credentials', () => {
      // 1 & 2. Launch browser and navigate to url
      cy.visit('http://automationexercise.com');
  
      // 3. Verify that home page is visible successfully
      cy.get('#slider-carousel').should('be.visible');
  
      // 4. Click on 'Signup / Login' button
      cy.contains('a', 'Signup / Login').click();
  
      // 5. Verify 'Login to your account' is visible
      cy.get('.login-form h2').should('contain.text', 'Login to your account');
  
      // 6. Enter incorrect email address and password
      cy.get('[data-qa="login-email"]').type('fakeuser_2026@invalid.com');
      cy.get('[data-qa="login-password"]').type('WrongPassword123!');
  
      // 7. Click 'login' button
      cy.get('[data-qa="login-button"]').click();
  
      // 8. Verify error 'Your email or password is incorrect!' is visible
      cy.get('.login-form p')
        .should('be.visible')
        .and('contain.text', 'Your email or password is incorrect!');
    });
  });*/

  import HomePage from '../support/pages/HomePage';
  import LoginPage from '../support/pages/LoginPage';

describe('Test Case 3: Login User with incorrect email and password (POM Style)', () => {
  const fakeEmail = 'this_user_does_not_exist_123@invalid.com';
  const fakePassword = 'WrongPassword999!';

  it('should attempt login with bad credentials and verify the error message display', () => {
    // 1. Navigate to the login page using Page Objects
    HomePage.visit();
    HomePage.navigateToSignupLogin();
    
    // 2. Verify header and attempt login with incorrect details
    LoginPage.verifyLoginHeader();
    LoginPage.login(fakeEmail, fakePassword);

    // 3. Verify that the website displays the correct red error message banner text
    cy.get('.login-form p')
      .should('be.visible')
      .and('contain.text', 'Your email or password is incorrect!');
  });
});

  
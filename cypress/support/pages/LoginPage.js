class LoginPage {
    // 1. Define Selectors
    get signupNameInput() { return cy.get('input[data-qa="signup-name"]'); }
    get signupEmailInput() { return cy.get('input[data-qa="signup-email"]'); }
    get signupButton() { return cy.get('button[data-qa="signup-button"]'); }
    get signupFormHeader() { return cy.get('.signup-form h2'); }
    
    get loginEmailInput() { return cy.get('[data-qa="login-email"]'); }
    get loginPasswordInput() { return cy.get('[data-qa="login-password"]'); }
    get loginButton() { return cy.get('[data-qa="login-button"]'); }
    get loginFormHeader() { return cy.get('.login-form h2'); } // NEW SELECTOR
  
    // 2. Define Actions
    verifySignupHeader() {
      this.signupFormHeader.should('be.visible').and('contain.text', 'New User Signup!');
    }
  
    // FIXED: Added the missing function that your test case is looking for!
    verifyLoginHeader() {
      this.loginFormHeader.should('be.visible').and('contain.text', 'Login to your account');
    }
  
    fillSignupForm(name, email) {
      this.signupNameInput.type(name);
      this.signupEmailInput.type(email);
    }
  
    clickSignup() {
      this.signupButton.click();
    }
  
    login(email, password) {
      this.loginEmailInput.type(email);
      this.loginPasswordInput.type(password);
      this.loginButton.click();
    }
  }
  
  export default new LoginPage();
  
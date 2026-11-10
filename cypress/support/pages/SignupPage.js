class SignupPage {
    // 1. Locate all the detailed profile form inputs using get methods
    get genderRadio() { return cy.get('#id_gender1'); }
    get passwordInput() { return cy.get('input[data-qa="password"]'); }
    get daysDropdown() { return cy.get('select[data-qa="days"]'); }
    get monthsDropdown() { return cy.get('select[data-qa="months"]'); }
    get yearsDropdown() { return cy.get('select[data-qa="years"]'); }
    
    get firstNameInput() { return cy.get('input[data-qa="first_name"]'); }
    get lastNameInput() { return cy.get('input[data-qa="last_name"]'); }
    get addressInput() { return cy.get('input[data-qa="address"]'); }
    get countryDropdown() { return cy.get('select[data-qa="country"]'); }
    get stateInput() { return cy.get('input[data-qa="state"]'); }
    get cityInput() { return cy.get('input[data-qa="city"]'); }
    get zipcodeInput() { return cy.get('input[data-qa="zipcode"]'); }
    get mobileInput() { return cy.get('input[data-qa="mobile_number"]'); }
    get createAccountButton() { return cy.get('button[data-qa="create-account"]'); }
    
    get accountCreatedHeader() { return cy.get('b'); }
    get continueButton() { return cy.get('[data-qa="continue-button"]'); }
    get logoutLink() { return cy.contains('a', 'Logout'); }
  
    // 2. Wrap the forms inside reusable action steps
    fillAccountDetails(password) {
      this.genderRadio.check();
      this.passwordInput.type(password);
      this.daysDropdown.select('15');
      this.monthsDropdown.select('August');
      this.yearsDropdown.select('1995');
    }
  
    fillAddressDetails() {
      this.firstNameInput.type('Alex');
      this.lastNameInput.type('Rivera');
      this.addressInput.type('123 Selector Way');
      this.countryDropdown.select('United States');
      this.stateInput.type('New York');
      this.cityInput.type('New York City');
      this.zipcodeInput.type('10001');
      this.mobileInput.type('5551234567');
    }
  
    submitProfile() {
      this.createAccountButton.click();
      this.accountCreatedHeader.should('contain.text', 'Account Created!');
      this.continueButton.click();
    }
  
    logout() {
      this.logoutLink.click();
    }
  }
  
  export default new SignupPage();
  
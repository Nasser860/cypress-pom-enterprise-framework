class TestCasesPage {
    // 1. Define Selectors
    get pageHeader() { return cy.get('b'); }
  
    // 2. Define Actions
    verifyTestCasesHeader() {
      cy.url().should('include', '/test_cases');
      this.pageHeader.should('be.visible').and('contain.text', 'Test Cases');
    }
  }
  
  export default new TestCasesPage();
  
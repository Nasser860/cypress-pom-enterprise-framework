/*Test Case 7: Verify Test Cases Page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Test Cases' button
5. Verify user is navigated to test cases page successfully
*/


/*describe('Test Case 7: Verify Test Cases Page', () => {
    it('should navigate to the Test Cases page successfully', () => {
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      cy.contains('a', /Test Cases/i).click();
  
      cy.url().should('include', '/test_cases');
      cy.get('b').should('contain.text', 'Test Cases');
    });
  });*/



  import HomePage from '../support/pages/HomePage';
  import TestCasesPage from '../support/pages/TestCasesPage';

  describe('Test Case 7: Verify Test Cases Page (POM Style)', () => {
  it('should navigate to the Test Cases page and verify headers cleanly using Page Objects', () => {
    // 1. Visit the site and click Test Cases via HomePage object
    HomePage.visit();
    HomePage.navigateToTestCases();

    // 2. Verify URL and header contents via TestCasesPage object
    TestCasesPage.verifyTestCasesHeader();
  });
});

  
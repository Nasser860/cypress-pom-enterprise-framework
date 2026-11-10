/*Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify 'SUBSCRIPTION' is visible
6. Scroll up page to top
7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen*/

/*describe("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {
    it("should scroll down to the footer and scroll back up manually using code commands successfully", () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit("https://automationexercise.com", { failOnStatusCode: false, timeout: 15000 });
      cy.get("#slider-carousel", { timeout: 15000 }).should("be.visible");
  
      // 3 & 4. Scroll down page to bottom and verify 'SUBSCRIPTION' header text is visible
      cy.scrollTo("bottom");
      cy.get("#footer h2").should("be.visible").and("contain.text", "Subscription");
  
      // 5. Scroll up page to the top manually using the built-in view positioning tool
      cy.scrollTo("top");
  
      // 6. Verify that page is scrolled up and main header landing text is visible on screen
      cy.get("#slider-carousel .active h2")
        .should("be.visible")
        .and("contain.text", "Full-Fledged practice website for Automation Engineers");
    });
  });*/

  import HomePage from '../support/pages/HomePage';

describe('Test Case 26: Verify Scroll Up without Arrow button (POM)', () => {
  it('should scroll to the bottom, verify subscription, scroll back to top programmatically, and verify the main banner text', () => {
    // 1. Launch & Navigate
    HomePage.visit();

    // 2. Scroll down page to bottom
    HomePage.scrollToBottom();

    // 3. Verify 'SUBSCRIPTION' text is visible
    HomePage.verifySubscriptionVisible();

    // 4. Scroll up page to top
    HomePage.scrollToTop();

    // 5. Verify top viewport banner text is displayed
    HomePage.verifyScrolledToTopText();
  });
});

  

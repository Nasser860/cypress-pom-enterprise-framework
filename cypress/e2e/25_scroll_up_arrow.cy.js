/*Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify 'SUBSCRIPTION' is visible
6. Click on arrow at bottom right side to move upward
7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen*/

/*describe("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
    it("should scroll down to the footer and scroll back up using the floating arrow button successfully", () => {
      // 1 & 2. Navigate securely using HTTPS and check loading guards
      cy.visit("https://automationexercise.com/", { failOnStatusCode: false, timeout: 15000 });
      cy.get("#slider-carousel", { timeout: 15000 }).should("be.visible");
  
      // 3 & 4. Scroll down page to bottom and verify 'SUBSCRIPTION' header text is visible
      cy.scrollTo("bottom");
      cy.get("#footer h2").should("be.visible").and("contain.text", "Subscription");
  
      // 5. Click on the floating arrow button at the bottom right side to move upward
      // The scroll-up button uses the unique CSS ID #scrollUp
      cy.get("a#scrollUp").should("be.visible").click();
  
      // 6. Verify that page is scrolled up and main header landing text is visible on screen
      // We check the active carousel headline element text
      cy.get("#slider-carousel .active h2")
        .should("be.visible")
        .and("contain.text", "Full-Fledged practice website for Automation Engineers");
    });
  });*/

  import HomePage from '../support/pages/HomePage';

describe('Test Case 25: Verify Scroll Up using Arrow button (POM)', () => {
  it('should scroll to the bottom to verify subscription, click the arrow button, and return to the main banner', () => {
    // 1. Launch & Navigate
    HomePage.visit();

    // 2. Scroll down page to bottom
    HomePage.scrollToBottom();

    // 3. Verify 'SUBSCRIPTION' is visible
    HomePage.verifySubscriptionVisible();

    // 4. Click on 'Arrow' button
    HomePage.clickScrollUpArrow();

    // 5. Verify top viewport banner text is displayed
    HomePage.verifyScrolledToTopText();
  });
});

  
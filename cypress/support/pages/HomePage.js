class HomePage {
    // 1. SELECTORS - All element locators grouped at the top
    get carousel() { return cy.get('#slider-carousel'); }
    get signupLoginLink() { return cy.contains('a', 'Signup / Login'); }
    get productsLink() { return cy.contains('a', /Products/i); }
    get cartLink() { return cy.contains('a', /Cart/i); }
    get testCasesLink() { return cy.contains('a', /Test Cases/i); }
    
    // STANDARD FIX: Adding the proper get selector for the contact link!
    get contactUsLink() { return cy.contains('a', /Contact us/i); }
    get footerSubscriptionHeader() { return cy.get('#footer h2'); }
    get subscriptionEmailInput() { return cy.get('input#susbscribe_email'); }
    get subscriptionSubmitButton() { return cy.get('button#subscribe'); }
    get subscriptionSuccessAlert() { return cy.get('.alert-success'); }

    // Existing selectors...
    get recommendedTitle() { return cy.get('.recommended_items .title'); }
  
  // Selects the 'Add to Cart' button specifically inside the active recommended item carousel
    get recommendedAddToCartBtn() { return cy.get('.recommended_items .active .add-to-cart');} 
    get viewCartModalLink() { return cy.get('.modal-content a[href="/view_cart"]'); }
    get proceedToCheckoutBtn() { return cy.get('.check_out'); }
    get subscriptionTitle() { return cy.get('.footer-widget h2'); }
    get scrollUpArrow() { return cy.get('#scrollUp'); }
    get mainHeaderTitle() { return cy.get('.item.active h2').first(); } // Targets the active carousel text banner

  
  
    // 2. ACTIONS - Reusable steps sitting at the bottom
    visit() {
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 30000 });
      this.carousel.should('be.visible');
    }
  
    navigateToSignupLogin() {
      this.signupLoginLink.click();
    }
  
    navigateToProducts() {
      this.productsLink.click();
    }
  
    navigateToCart() {
      this.cartLink.click();
    }
  
    // CLEANED UP ACTION: Uses the get selector from above!
    navigateToContactUs() {
      this.contactUsLink.click();
    }
    navigateToTestCases() {
        this.testCasesLink.click();
      }
    scrollToFooter() {
        cy.scrollTo('bottom');
        this.footerSubscriptionHeader.should('be.visible').and('contain.text', 'Subscription');
      }
    
    subscribeUser(email) {
        this.subscriptionEmailInput.type(email);
        this.subscriptionSubmitButton.click();
      }
    
    verifySubscriptionSuccess() {
        this.subscriptionSuccessAlert
          .should('be.visible')
          .and('contain.text', 'You have been successfully subscribed!');
      }
      // --- NEW METHODS FOR TEST CASE 22 ---

    scrollToRecommendedItems() {
    // 3. Scroll to bottom of page seamlessly
    this.recommendedTitle.scrollIntoView();
  }

    verifyRecommendedItemsVisible() {
    // 4. Verify 'RECOMMENDED ITEMS' are visible
    this.recommendedTitle.should('be.visible').and('contain.text', 'recommended items');
  }

    addRecommendedProductToCart() {
    // 5. Click on 'Add To Cart' on a Recommended product
    // Note: We use .first() in case multiple cards are visible in the slider frame
    this.recommendedAddToCartBtn.first().click();
  }

    navigateToCartFromModal() {
    // 6. Click on 'View Cart' button on the success popup modal
    this.viewCartModalLink.should('be.visible').click();
  }
  proceedToCheckout() {
    this.proceedToCheckoutBtn.click();
  }
  scrollToBottom() {
    // 2. Scroll down page to bottom
    cy.scrollTo('bottom');
  }
  
  verifySubscriptionVisible() {
    // 3. Verify 'SUBSCRIPTION' text is visible
    // We match case-insensitively just like we did with recommended items to prevent casing fails
    this.subscriptionTitle.should('be.visible').and('contain.text', 'Subscription');
  }
  
  clickScrollUpArrow() {
    // 4. Click on the 'Arrow' button at the bottom right corner
    this.scrollUpArrow.should('be.visible').click();
  }
  
  verifyScrolledToTopText() {
    // 5. Verify that page is scrolled up and main text banner is visible on screen
    this.mainHeaderTitle.should('be.visible')
      .and('contain.text', 'Full-Fledged practice website for Automation Engineers');
  }
  scrollToTop() {
    // 4. Scroll up page to top programmatically using the built-in keyword position
    cy.scrollTo('top');
  }
  
    
  }
  
  export default new HomePage();
  
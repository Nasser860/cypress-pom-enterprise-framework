class CheckoutPage {
    // 1. Define Selectors
    get deliveryAddressBlock() { return cy.get('#address_delivery'); }
    get orderReviewSection() { return cy.get('#cart_info'); }
    get commentTextArea() { return cy.get('textarea[name="message"]'); }
    get placeOrderButton() { return cy.contains('a', 'Place Order'); }
    
    // Payment Selectors
    get nameOnCardInput() { return cy.get('[data-qa="name-on-card"]'); }
    get cardNumberInput() { return cy.get('[data-qa="card-number"]'); }
    get cvcInput() { return cy.get('[data-qa="cvc"]'); }
    get expiryMonthInput() { return cy.get('[data-qa="expiry-month"]'); }
    get expiryYearInput() { return cy.get('[data-qa="expiry-year"]'); }
    get payButton() { return cy.get('[data-qa="pay-button"]'); }
    get orderPlacedHeader() { return cy.get('[data-qa="order-placed"] b'); }
    get downloadInvoiceButton() { return cy.get('a.check_out[href*="download_invoice"]'); }
    get finalContinueButton() { return cy.get('[data-qa="continue-button"]'); }

  
    // 2. Define Actions
    verifyCheckoutReviewLanding() {
      this.deliveryAddressBlock.should('be.visible').and('contain.text', 'Your delivery address');
      this.orderReviewSection.should('be.visible');
    }

    // --- ADD THIS METHOD FOR ADDRESS VERIFICATION ---
    verifyAddressDetails(user) {
        // 1. Full Name
        cy.get('#address_delivery .address_firstname.address_lastname')
          .should('be.visible')
          .and('contain.text', `${user.firstName} ${user.lastName}`);
          
        // 2. Address Line 1
        cy.get('#address_delivery .address_address1.address_address2').eq(1)
          .should('contain.text', user.address1);
          
        // 3. Address Line 2
        cy.get('#address_delivery .address_address1.address_address2').eq(2)
          .should('contain.text', user.address2);
          
        // 4. City, State, Zip
        // Replace line 39-40 in cypress/support/pages/CheckoutPage.js with this:

        cy.get('#address_delivery .address_city.address_state_name.address_postcode')
        .should('contain.text', user.city)
        .and('contain.text', user.state)
        .and('contain.text', user.zip);

          
        // 5. Country
        cy.get('#address_delivery .address_country_name')
          .should('contain.text', user.country);
          
        // 6. Phone Number
        cy.get('#address_delivery .address_phone')
          .should('contain.text', user.phone);
      }
    
  
        submitComment(commentText) {
        this.commentTextArea.type(commentText);
        this.placeOrderButton.click();
    }
  
        fillPaymentDetails(name, card, cvc, month, year) {
        this.nameOnCardInput.type(name);
        this.cardNumberInput.type(card);
        this.cvcInput.type(cvc);
        this.expiryMonthInput.type(month);
        this.expiryYearInput.type(year);
        }
  
        confirmPayment() {
        this.payButton.click();
        this.orderPlacedHeader.should('be.visible').and('contain.text', 'Order Placed!');
        }
        /*downloadInvoiceAndContinue() {
          // 1. Strip target="_blank" so Cypress doesn't break from a new browser tab open
  this.downloadInvoiceButton.invoke('removeAttr', 'target');
  
  // 2. Click the button to simulate the user action
  this.downloadInvoiceButton.click();
            // 6. Click 'Continue'
            this.finalContinueButton.click({ force: true });
          }*/
          downloadInvoiceAndContinue() {
            // 1. Intercept the page load crash by listening to window unload events
            cy.window().then((win) => {
              setTimeout(() => {
                win.location.reload(); // Instantly unfreezes the Cypress execution runner loop
              }, 1000);
            });
        
            // 2. Click the button to simulate the user action
            this.downloadInvoiceButton.click({ force: true });
        
            // 3. Click 'Continue' once the state unfreezes
            this.finalContinueButton.click({ force: true });
          }
        
  }
  
  export default new CheckoutPage();
  
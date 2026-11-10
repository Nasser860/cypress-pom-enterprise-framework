import HomePage from './HomePage';

class CartPage {
  // 1. Define Selectors
    get cartTableRows() { return cy.get('tbody tr'); }
    get emptyCartNotice() { return cy.get('#empty_cart'); }
    // Add these lines right inside your list of selectors at the top of CartPage.js!
    get productOneRow() { return cy.get('#product-1'); }
    get productTwoRow() { return cy.get('#product-2'); }
      // Add this line right inside your list of selectors at the top of CartPage.js!
    get cartDeleteButton() { return cy.get('#product-1 .cart_quantity_delete'); }
    // Selector for the checkout button
    get proceedToCheckoutBtn() { return cy.get('.check_out'); }

    
    productPrice(id) { return cy.get(`#product-${id} .cart_price`); }
    productQuantity(id) { return cy.get(`#product-${id} .cart_quantity`); }
    productTotal(id) { return cy.get(`#product-${id} .cart_total`); }
  

  // 2. Define Actions
    verifyCartPageLanding() {
    cy.url().should('include', '/view_cart');
  }

  // --- ADD THIS METHOD HERE FOR TEST CASE 22 ---
  verifyProductIsDisplayedInCart() {
    // Verifies that the table rows exist and are not empty
    this.cartTableRows.should('be.visible').and('have.length.at.least', 1);
  }

  // We reuse the footer actions directly from HomePage since the footer is shared across views!
  scrollToFooter() {
    HomePage.scrollToFooter();
  }

  subscribeUser(email) {
    HomePage.subscribeUser(email);
  }

  verifySubscriptionSuccess() {
    HomePage.verifySubscriptionSuccess();
  }
  // --- ADD THIS METHOD SO YOUR TEST RUNS PERFECTLY ---
  proceedToCheckout() {
    this.proceedToCheckoutBtn.should('be.visible').click();
  }
}

export default new CartPage();

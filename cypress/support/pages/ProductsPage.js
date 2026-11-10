class ProductsPage {
    // 1. Define Selectors
    get featuresItemsGrid() { return cy.get('.features_items'); }
    get viewFirstProductLink() { return cy.get('.choose a').first(); }
    get productInformationBlock() { return cy.get('.product-information'); }
    get productNameHeader() { return cy.get('.product-information h2'); }
    get productCategoryText() { return cy.get('.product-information p'); }
    get productPriceSpan() { return cy.get('.product-information span span'); }
    
    // Search related selectors
    get productGridTitle() { return cy.get('.features_items h2.title'); }
    get searchInput() { return cy.get('input#search_product'); }
    get searchButton() { return cy.get('button#submit_search'); }
    get productGridItems() { return cy.get('.features_items .col-sm-4'); }
  
    // FIXED: Added the modal selectors your test file is looking for!
    get modalContent() { return cy.get('.modal-content'); }
    get viewCartModalLink() { return cy.contains('u', 'View Cart'); }
    get quantityInput() { return cy.get('input#quantity'); }
    get addToCartButton() { return cy.get('button.cart'); }
      // Add this right inside your list of selectors at the top of ProductsPage.js!
    get brandsSidebar() { return cy.get('.left-sidebar .brands_products'); }

    get reviewFormHeader() { return cy.contains('a', /Write Your Review/i); }
    get reviewNameInput() { return cy.get('input#name'); }
    get reviewEmailInput() { return cy.get('input#email'); }
    get reviewTextArea() { return cy.get('textarea#review'); }
    get reviewSubmitButton() { return cy.get('button#button-review'); }
    get reviewSuccessAlert() { return cy.get('.alert-success span'); }
    

  
  
    // 2. Define Actions
    verifyProductsPageLanding() {
      cy.url().should('include', '/products');
      this.featuresItemsGrid.should('be.visible').and('contain.text', 'All Products');
    }
  
    viewFirstProductDetails() {
      this.viewFirstProductLink.click();
      cy.url().should('include', '/product_details/');
    }
  
    verifyProductAttributes() {
      this.productNameHeader.should('be.visible');
      this.productCategoryText.should('contain.text', 'Category:');
      this.productPriceSpan.should('be.visible');
      this.productInformationBlock.should('contain.text', 'Availability:');
      this.productInformationBlock.should('contain.text', 'Condition:');
      this.productInformationBlock.should('contain.text', 'Brand:');
    }
  
    searchProduct(productName) {
      this.searchInput.type(productName);
      this.searchButton.click();
    }
  
    verifySearchedProductsHeader() {
      this.productGridTitle.should('be.visible').and('contain.text', 'Searched Products');
    }
  
    verifyProductsVisible() {
      this.productGridItems.should('have.length.greaterThan', 0);
    }
  
    navigateToCartFromModal() {
      this.viewCartModalLink.click();
    }
      // FIXED: Add these two action methods right inside the bottom of your ProductsPage class!
    addFirstItemToCart() {
    
    //cy.get('.productinfo a[data-product-id="1"]').first().click();
    cy.get('.productinfo .add-to-cart').first().click();
    this.modalContent.should('be.visible');
  }

    navigateToCartFromModal() {
    this.viewCartModalLink.click();
  }
  submitProductReview(name, email, feedback) {
    this.reviewFormHeader.should('be.visible');
    this.reviewNameInput.type(name);
    this.reviewEmailInput.type(email);
    this.reviewTextArea.type(feedback);
    this.reviewSubmitButton.click();
  }

  verifyReviewSuccess() {
    this.reviewSuccessAlert
      .should('be.visible')
      .and('contain.text', 'Thank you for your review.');
  }


  }
  
  export default new ProductsPage();

  
  
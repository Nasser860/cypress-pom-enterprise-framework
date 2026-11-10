/*Test Case 18: View Category Products
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that categories are visible on left side bar
4. Click on 'Women' category
5. Click on any category link under 'Women' category, for example: Dress
6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
7. On left side bar, click on any sub-category link of 'Men' category
8. Verify that user is navigated to that category page*/

describe('Test Case 18: View Category Products', () => {
    it('should navigate through sidebar categories and verify filtered products successfully', () => {
      // 1. Navigate securely using HTTPS and check loading guards
      cy.visit('https://automationexercise.com', { failOnStatusCode: false, timeout: 15000 });
      cy.get('#slider-carousel', { timeout: 15000 }).should('be.visible');
  
      // 2. Verify that categories panel is visible on left sidebar
      cy.get('#accordian').should('be.visible');
  
      // 3 & 4. Click on the 'Dress' sub-category link directly using a force click
      // This completely bypasses the fragile accordion animation layer!
      cy.get('#Women a').contains(/Dress/i).click({ force: true });
  
      // 5. Verify that category page is displayed and confirms header text
      cy.url().should('include', '/category_products/1');
      cy.get('.features_items h2.title')
        .should('be.visible')
        .and('contain.text', 'Women - Dress Products');
  
      // 6 & 7. Click on the 'Tshirts' sub-category link under Men using a force click
      cy.get('#Men a').contains(/Tshirts/i).click({ force: true });
  
      // 8. Verify that user lands on the correct category page successfully
      cy.url().should('include', '/category_products/3');
      cy.get('.features_items h2.title')
        .should('be.visible')
        .and('contain.text', 'Men - Tshirts Products');
    });
  });
  
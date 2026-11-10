/*Test Case 6: Contact Us Form
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully*/



/*describe('Test Case 6: Contact Us Form', () => {
    it('should submit the contact form with a file attachment successfully', () => {
      // 1 & 2. Launch browser and navigate to url
      cy.visit('http://automationexercise.com');
  
      // 3. Verify that home page is visible successfully
      cy.get('#slider-carousel').should('be.visible');
  
      // 4. Click on 'Contact Us' button
      cy.contains('a', 'Contact us').click();
  
      // 5. Verify 'GET IN TOUCH' is visible
      cy.get('.contact-form h2').should('be.visible').and('contain.text', 'Get In Touch');
  
      // 6. Enter name, email, subject and message
      cy.get('[data-qa="name"]').type('Alex Tester');
      cy.get('[data-qa="email"]').type('alex.tester@practice.com');
      cy.get('[data-qa="subject"]').type('Automation Query');
      cy.get('[data-qa="message"]').type('This is an automated test message verifying the form.');
  
      // 7. Upload file (Bypassing plugin requirement using native selectFile)
      // We create a quick mock text file layout inline to upload instantly
      cy.get('input[name="upload_file"]').selectFile({
        contents: Cypress.Buffer.from('hello world'),
        fileName: 'testfile.txt',
        mimeType: 'text/plain',
      });
  
      // 8. Click 'Submit' button & automatically click "OK" on the browser popup
      // Cypress automatically accepts window:confirm alerts by default!
      cy.get('[data-qa="submit-button"]').click();
  
      // 9. Verify success message is visible
      cy.get('.status.alert.alert-success')
        .should('be.visible')
        .and('contain.text', 'Success! Your details have been submitted successfully.');
  
      // 10. Click 'Home' button and verify landing
      cy.get('#contact-page .btn-success').click();
      cy.url().should('eq', 'https://automationexercise.com/');
      cy.get('#slider-carousel').should('be.visible');
    });
  });*/


  import HomePage from '../support/pages/HomePage';
  import ContactUsPage from '../support/pages/ContactUsPage';

  describe('Test Case 6: Contact Us Form (POM Style)', () => {
  it('should fill out and submit the contact form with a file attachment successfully', () => {
    // 1. Navigate to Contact Us page using Page Objects
    HomePage.visit();
    HomePage.navigateToContactUs();

    // 2. Verify form header and fill data fields
    ContactUsPage.verifyContactHeader();
    ContactUsPage.fillContactForm(
      'Nassim Tester', 
      'nassim@practice.com', 
      'Automation Verification', 
      'Testing the contact form layout using an enterprise Page Object framework.'
    );

    // 3. Upload inline attachment file and click submit
    ContactUsPage.uploadMockFile();
    ContactUsPage.submitForm();

    // 4. Verify form alert validation notice and return to landing homepage view matrix
    ContactUsPage.verifySuccessMessage();
    ContactUsPage.clickHome();

    // 5. Verify user lands securely back on the landing carousel view
    HomePage.carousel.should('be.visible');
  });
});




  
class ContactUsPage {
    // 1. Define Selectors
    get contactHeader() { return cy.get('div.contact-form h2.title'); }
    get nameInput() { return cy.get('input[data-qa="name"]'); }
    get emailInput() { return cy.get('input[data-qa="email"]'); }
    get subjectInput() { return cy.get('input[data-qa="subject"]'); }
    get messageTextArea() { return cy.get('textarea[data-qa="message"]'); }
    get fileUploadInput() { return cy.get('input[name="upload_file"]'); }
    get submitButton() { return cy.get('input[name="submit"]'); }
    get successAlert() { return cy.get('.status.alert-success'); }
    get homeButton() { return cy.get('a.btn-success'); }
  
    // 2. Define Actions
    verifyContactHeader() {
      this.contactHeader.should('be.visible').and('contain.text', 'Get In Touch');
    }
  
    fillContactForm(name, email, subject, message) {
      this.nameInput.type(name);
      this.emailInput.type(email);
      this.subjectInput.type(subject);
      this.messageTextArea.type(message);
    }
  
    uploadMockFile() {
      this.fileUploadInput.selectFile({
        contents: Cypress.Buffer.from('hello world'),
        fileName: 'testfile.txt',
        mimeType: 'text/plain',
      });
    }
  
    submitForm() {
      this.submitButton.click();
    }
  
    verifySuccessMessage() {
      this.successAlert
        .should('be.visible')
        .and('contain.text', 'Success! Your details have been submitted successfully.');
    }
  
    clickHome() {
      this.homeButton.click();
    }
  }
  
  export default new ContactUsPage();
  
class ContactDetailsPage {
  get editContactButton() {
    return cy.get('#edit-contact');
  }

  get deleteButton() {
    return cy.get('#delete');
  }

  get returnButton() {
    return cy.get('#return');
  }
}

export default new ContactDetailsPage();

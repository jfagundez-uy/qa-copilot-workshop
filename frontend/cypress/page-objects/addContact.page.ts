class AddContactPage {
  get firstNameField() {
    return cy.get('#firstName');
  }

  get lastNameField() {
    return cy.get('#lastName');
  }
}

export default new AddContactPage();

class AddContactPage {
  get firstNameField() {
    return cy.get('#firstName');
  }

  get lastNameField() {
    return cy.get('#lastName');
  }

  get submitButton() {
    return cy.get('#submit');
  }
}

export default new AddContactPage();

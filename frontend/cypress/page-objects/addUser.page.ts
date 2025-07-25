class AddUserPage {
  get firstName() {
    return cy.get('#firstName');
  }

  get lastName() {
    return cy.get('#lastName');
  }

  get email() {
    return cy.get('#email');
  }

  get password() {
    return cy.get('#password');
  }

  get submitButton() {
    return cy.get('#submit');
  }

  get cancelButton() {
    return cy.get('#cancel');
  }

  // Helper methods for common actions
  fillUserForm(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    this.firstName.type(userData.firstName);
    this.lastName.type(userData.lastName);
    this.email.type(userData.email);
    this.password.type(userData.password);
  }

  submitForm() {
    this.submitButton.click();
  }

  cancelForm() {
    this.cancelButton.click();
  }
}

export default new AddUserPage();

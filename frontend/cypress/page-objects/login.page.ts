class LoginPage {
  get emailField() {
    return cy.get('#email');
  }
  get passwordField() {
    return cy.get('#password');
  }

  get submitButton() {
    return cy.get('#submit');
  }

  get errorMessage() {
    return cy.get('#error');
  }

  get signUpButton() {
    return cy.get('#signup');
  }

  login(email: string, password: string) {
    this.emailField.type(email);
    this.passwordField.type(password);
    this.submitButton.click();
  }

  fillLoginForm(credentials: { email: string; password: string }) {
    this.emailField.type(credentials.email);
    this.passwordField.type(credentials.password);
  }

  submitLogin() {
    this.submitButton.click();
  }

  clearForm() {
    this.emailField.clear();
    this.passwordField.clear();
  }
}

export default new LoginPage();

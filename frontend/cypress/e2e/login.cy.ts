import LoginPage from '../page-objects/login.page';
import TestDataHelper, { TestUser } from '../support/testDataHelper';

describe('Login Page', () => {
  let testUser: TestUser;

  beforeEach(() => {
    testUser = TestDataHelper.createTestUser();
    TestDataHelper.createUser(testUser);
    cy.visit('/login');
  });

  it('should display all login form elements', () => {
    // Verify all form elements are visible
    LoginPage.emailField.should('be.visible');
    LoginPage.passwordField.should('be.visible');
    LoginPage.submitButton.should('be.visible');
  });

  it('should successfully log in with valid credentials', () => {
    LoginPage.login(testUser.email, testUser.password);
    cy.url().should('not.contain', '/login');
  });

  it('should show error for invalid email', () => {
    // Try to log in with invalid email
    LoginPage.login('invalid@example.com', testUser.password);

    // Should stay on login page or show error message
    LoginPage.errorMessage
      .should('not.be.visible')
      .and('contain', 'Incorrect username or password');
  });

  it('should show error for invalid password', () => {
    // Try to log in with valid email but wrong password
    LoginPage.login(testUser.email, 'WrongPassword123!');

    // Should stay on login page or show error message
    cy.url().should('contain', '/');
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain', 'Incorrect username or password');
  });

  it('should show error for empty email field', () => {
    // Try to submit with empty email
    LoginPage.passwordField.type(testUser.password);
    LoginPage.submitLogin();

    // Should stay on login page
    cy.url().should('contain', '/');
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain', 'Incorrect username or password');
  });

  it('should show error for empty password field', () => {
    // Try to submit with empty password
    LoginPage.emailField.type(testUser.email);
    LoginPage.submitLogin();

    // Should stay on login page
    cy.url().should('contain', '/');
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain', 'Incorrect username or password');
  });

  it('should show error for both empty fields', () => {
    // Try to submit empty form
    LoginPage.submitLogin();

    // Should stay on login page
    cy.url().should('contain', '/');
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain', 'Incorrect username or password');
  });

  it('should be able to clear form fields', () => {
    // Fill in some data
    LoginPage.fillLoginForm({
      email: 'test@example.com',
      password: 'somepassword',
    });

    // Clear the form
    LoginPage.clearForm();

    // Verify fields are empty
    LoginPage.emailField.should('have.value', '');
    LoginPage.passwordField.should('have.value', '');
  });

  it('should navigate to sign up page when clicking sign up button', () => {
    LoginPage.signUpButton.should('be.visible');
    LoginPage.signUpButton.click();

    // Should navigate to sign up/add user page
    cy.url().should('contain', '/addUser');
  });
});

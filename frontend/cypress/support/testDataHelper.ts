import AddUserPage from '../page-objects/addUser.page';

export interface TestUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class TestDataHelper {
  static createTestUser(): TestUser {
    const timestamp = Date.now();
    return {
      firstName: 'Test',
      lastName: 'User',
      email: `test.user.${timestamp}@example.com`,
      password: 'TestPassword123!',
    };
  }

  static createUserWithSpecialChars(): TestUser {
    const timestamp = Date.now();
    return {
      firstName: 'José',
      lastName: "O'Connor",
      email: `jose.oconnor+${timestamp}@example.com`,
      password: 'P@ssw0rd!2023',
    };
  }

  static createUser(userData: TestUser): void {
    cy.visit('/addUser');
    AddUserPage.fillUserForm(userData);
    AddUserPage.submitForm();

    // Wait for user creation to complete
    cy.url().should('not.contain', '/addUser');
  }
}

export default TestDataHelper;

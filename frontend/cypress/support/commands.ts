// Make sure this file is a module
export {};

Cypress.Commands.add('createUserViaApi', () => {
  const randomStr = Math.random().toString(36).substring(2, 10);
  const body = {
    email: `user_${randomStr}@test.com`,
    firstName: 'Test',
    lastName: 'Test',
    password: '1234567',
  };

  return cy.request({
    method: 'POST',
    url: 'https://thinking-tester-contact-list.herokuapp.com/users',
    body,
    failOnStatusCode: false,
  });
});

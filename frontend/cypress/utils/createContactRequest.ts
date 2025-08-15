export const createContact = () => {
  cy.getCookie('token').then((cookie) => {
    const bearer = cookie?.value ? `Bearer ${cookie.value}` : '';
    cy.request({
      method: 'POST',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
      headers: { Authorization: bearer },
      body: { firstName: 'Tester', lastName: 'Test' },
      failOnStatusCode: false,
    });
  });
};

import { createContact } from '../utils/createContactRequest';
import ContactListPage from '../page-objects/contactList.page';

describe('Contact API and UI Integration', () => {
  let token: string;

  before(() => {
    cy.createUserViaApi().then((response) => {
      token = response.body.token;
      cy.setCookie('token', token);
    });
  });

  it('should create a contact via API and verify it appears in the UI', () => {
    cy.setCookie('token', token);
    createContact();
    cy.reload();
    cy.visit('/contactList');
    ContactListPage.contactRow.should('exist');
  });
});

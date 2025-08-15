class ContactListPage {
  get contactRow() {
    return cy.get('tr.contactTableBodyRow');
  }
}

export default new ContactListPage();

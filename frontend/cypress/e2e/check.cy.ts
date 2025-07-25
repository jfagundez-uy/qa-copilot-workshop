describe('Workshop Check', () => {
  it('should confirm the Cypress framework is set up', () => {
    cy.visit('/');
    cy.log('Congratulations!');
    cy.log('You have successfully set up your automation framework');
  });
});

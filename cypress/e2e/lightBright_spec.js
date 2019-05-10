describe('clicks', () => {
  it('should color in a cell', () => {
    cy.visit('/');
    cy.getByTestId('30')
      .click()
      .pause()
      .should('not.css', 'background-image', 'none');
  });
});

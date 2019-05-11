describe('clicks', () => {
  it('should color in a cell', () => {});
});

describe('accessibility events', () => {
  it('should color in a cell on mouseDown', () => {
    cy.visit('/');
    cy.getByTestId('30')
      .click()
      .should('not.css', 'background-image', 'none');
  });

  it('should color in a cell on keyDown when key is "Enter" or Space', () => {
    cy.visit('/');
    cy.getByTestId('30')
      .trigger('keydown', {
        key: 'Enter',
      })
      .should('not.css', 'background-image', 'none');

    cy.getByTestId('31')
      .trigger('keydown', {
        key: ' ',
      })
      .should('not.css', 'background-image', 'none');
  });

  it('should do nothing when keys are not "Enter" or "Space"', () => {
    cy.getByTestId('32')
      .trigger('keydown', {
        key: 'A',
      })
      .should('css', 'background-image', 'none');

    cy.getByTestId('32')
      .trigger('keydown', {
        key: 'b',
      })
      .should('css', 'background-image', 'none');
  });
});

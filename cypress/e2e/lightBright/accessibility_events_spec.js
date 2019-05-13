/* eslint-disable promise/prefer-await-to-then */

describe('accessibility events', () => {
  it('should color a cell on mouseDown', () => {
    cy.visit('/');
    cy.getByTestId('30')
      .click()
      .hasBackgroundImage();
  });

  it('should color a cell on keyDown when key is "Enter" or Space', () => {
    cy.visit('/');
    cy.getByTestId('30')
      .trigger('keydown', {
        key: 'Enter',
      })
      .hasBackgroundImage();

    cy.getByTestId('31')
      .trigger('keydown', {
        key: ' ',
      })
      .hasBackgroundImage();
  });

  it('should do nothing when key pressed is not "Enter" or "Space"', () => {
    cy.visit('/');
    cy.getByTestId('32')
      .trigger('keydown', {
        key: 'A',
      })
      .noBackgroundImage();

    cy.getByTestId('32')
      .trigger('keydown', {
        key: 'b',
      })
      .noBackgroundImage();
  });
});

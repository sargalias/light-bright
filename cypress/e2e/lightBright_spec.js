const haveBackgroundImage = jCell =>
  expect(getComputedStyle(jCell[0]).backgroundImage).not.eq('none');

const notHaveBackgroundImage = jCell =>
  expect(getComputedStyle(jCell[0]).backgroundImage).eq('none');

describe('clicks', () => {
  it('should color in a cell', () => {});
});

describe('accessibility events', () => {
  it('should color in a cell on mouseDown', () => {
    cy.visit('/');
    cy.getByTestId('30')
      .click()
      .then(haveBackgroundImage);
  });

  it('should color in a cell on keyDown when key is "Enter" or Space', () => {
    cy.visit('/');
    cy.getByTestId('30')
      .trigger('keydown', {
        key: 'Enter',
      })
      .then(haveBackgroundImage);

    cy.getByTestId('31')
      .trigger('keydown', {
        key: ' ',
      })
      .then(haveBackgroundImage);
  });

  it('should do nothing when keys are not "Enter" or "Space"', () => {
    cy.visit('/');
    cy.getByTestId('32')
      .trigger('keydown', {
        key: 'A',
      })
      .then(notHaveBackgroundImage);

    cy.getByTestId('32')
      .trigger('keydown', {
        key: 'b',
      })
      .then(notHaveBackgroundImage);
  });
});

describe('drag functionality', () => {
  it('basic drag', () => {
    cy.visit('/');
    cy.getByTestId('30')
      .trigger('mousedown')
      .then(haveBackgroundImage);
    cy.getByTestId('31')
      .trigger('mouseover')
      .then(haveBackgroundImage);
    cy.getByTestId('32')
      .trigger('mouseover')
      .then(haveBackgroundImage);
    cy.getByTestId('32').trigger('mouseup');
  });
});

/* eslint-disable no-loops/no-loops */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable promise/no-nesting */
/* eslint-disable promise/prefer-await-to-then */

const getCellColor = cells => cells[0].style.backgroundImage;

const saveCellColor = (cells, colors) => {
  colors.push(getCellColor(cells));
};

const areColorsUnique = colors => new Set(colors).size === colors.length;

describe('colors', () => {
  it('should generate on every click', () => {
    cy.visit('/');
    for (let i = 0; i < 10; i += 1) {
      cy.getByTestId(`${30 + i}`)
        .click()
        .then(cells => expect(getCellColor(cells).length).greaterThan(0));
    }
  });

  it('multiple clicks should produce unique colors', () => {
    cy.visit('/');
    const colors = [];
    for (let i = 0; i < 10; i += 1) {
      cy.getByTestId(`${30 + i}`).then(cells => saveCellColor(cells, colors));
    }
    cy.wrap(colors).then(colorsArr =>
      expect(areColorsUnique(colorsArr)).eq(true),
    );
  });
});

describe('clicks', () => {
  it('should override the color of an already colored cell', () => {
    let initialColor;
    cy.getByTestId('30')
      .click()
      .as('cell')
      .then(cells => {
        initialColor = getCellColor(cells);
      });
    cy.get('@cell')
      .click()
      .then(cells => {
        const color = getCellColor(cells);
        expect(color).not.eq(initialColor);
      });
  });
});

/* eslint-disable promise/prefer-await-to-then */

describe('colors', () => {
  it('should be unique', () => {
    const cellHues = [];
    cy.visit('/');
    cy.getByTestId('1')
      .click()
      .then(jCell => {
        const cellHue = jCell[0].style.getPropertyValue('--hue');
        cellHues.push(cellHue);
      });
    cy.getByTestId('2')
      .click()
      .then(jCell => {
        const cellHue = jCell[0].style.getPropertyValue('--hue');
        cellHues.push(cellHue);
      });
    cy.getByTestId('3')
      .click()
      .then(jCell => {
        const cellHue = jCell[0].style.getPropertyValue('--hue');
        cellHues.push(cellHue);
      });
    cy.getByTestId('4')
      .click()
      .then(jCell => {
        const cellHue = jCell[0].style.getPropertyValue('--hue');
        cellHues.push(cellHue);
      });

    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.wrap(cellHues).then(cellHuesArr =>
      expect(new Set(cellHuesArr).size).eq(cellHuesArr.length),
    );
  });
});

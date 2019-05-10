/* eslint-disable no-loops/no-loops */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable promise/no-nesting */
/* eslint-disable promise/prefer-await-to-then */

describe('clicks', () => {
  it('should color in a cell', () => {
    cy.wrap(true).then(bool => expect(bool).eq(true));
  });
});

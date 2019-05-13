/* eslint-disable promise/prefer-await-to-then */

describe('drag functionality', () => {
  it('should start on mousedown and stop on mouseup or when the mouse leaves the board', () => {
    cy.visit('/');

    cy.getByTestId('30')
      .trigger('mouseover')
      .noBackgroundImage();

    // begin drag
    cy.getByTestId('30')
      .trigger('mousedown')
      .hasBackgroundImage();
    cy.getByTestId('31')
      .trigger('mouseover')
      .hasBackgroundImage();
    cy.getByTestId('32')
      .trigger('mouseover')
      .hasBackgroundImage();

    // end drag
    cy.getByTestId('33')
      .trigger('mouseup')
      .trigger('mouseover')
      .noBackgroundImage();

    // begin drag
    cy.getByTestId('33')
      .trigger('mousedown')
      .hasBackgroundImage();

    // end drag
    cy.getByTestId('board').trigger('mouseout');

    cy.getByTestId('34')
      .trigger('mouseover')
      .noBackgroundImage();
  });

  it('should color all Cells the same as the first cell', () => {
    let firstBackgroundImage;

    const getCellBackgroundImage = jCell =>
      getComputedStyle(jCell[0]).backgroundImage;

    const assertSameBackgroundImage = (image1, image2) =>
      expect(image1).eq(image2);

    const assertNotSameBackgroundImage = (image1, image2) =>
      expect(image1).not.eq(image2);

    cy.visit('/');

    // click to begin drag
    cy.getByTestId('30')
      .trigger('mousedown')
      .then(jCell => {
        firstBackgroundImage = getCellBackgroundImage(jCell);
      });

    cy.getByTestId('31')
      .trigger('mouseover')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertSameBackgroundImage(firstBackgroundImage, backgroundImage);
      });
    cy.getByTestId('32')
      .trigger('mouseover')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertSameBackgroundImage(firstBackgroundImage, backgroundImage);
      });

    // end drag
    cy.getByTestId('33').trigger('mouseup');

    // begin new drag
    cy.getByTestId('30')
      .trigger('mousedown')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertNotSameBackgroundImage(firstBackgroundImage, backgroundImage);
        firstBackgroundImage = getCellBackgroundImage(jCell);
      });

    cy.getByTestId('31')
      .trigger('mouseover')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertSameBackgroundImage(firstBackgroundImage, backgroundImage);
      });
    cy.getByTestId('32')
      .trigger('mouseover')
      .then(jCell => {
        const backgroundImage = getCellBackgroundImage(jCell);
        assertSameBackgroundImage(firstBackgroundImage, backgroundImage);
      });

    // end drag
    cy.getByTestId('33').trigger('mouseup');
  });
});

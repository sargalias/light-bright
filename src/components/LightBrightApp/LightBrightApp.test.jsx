import React from 'react';
import { render, cleanup, fireEvent } from 'testUtils'; // eslint-disable-line
import LightBrightApp from './LightBrightApp';

describe('LightBrightApp', () => {
  afterEach(cleanup);

  test('should render a number of cells equal to its numCells prop', () => {
    const { container } = render(<LightBrightApp numCells={30} />);
    expect(container.querySelectorAll('[data-cell]').length).toBe(30);
  });

  test('click on cell should color it in', () => {
    // jsdom can't test CSS custom properties yet.
    const { getByTestId } = render(<LightBrightApp numCells={5} />);
    const cell = getByTestId('2');

    fireEvent.mouseDown(cell);

    expect(cell.classList.contains('Cell___isOn')).toBe(true);
    expect(cell.classList.contains('Cell')).toBe(true);
  });

  describe('drag functionality', () => {
    test('when triggering mousedown on a cell, dragging over other cells should give them color', () => {
      const { getByTestId } = render(<LightBrightApp numCells={5} />);
      const cell1 = getByTestId('1');
      const cell2 = getByTestId('2');
      const cell3 = getByTestId('3');

      fireEvent.mouseDown(cell1);
      fireEvent.mouseOver(cell2);
      fireEvent.mouseOver(cell3);

      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(true);
      expect(cell3.classList.contains('Cell___isOn')).toBe(true);
    });
  });
});

import React from 'react';
import { render, cleanup, fireEvent } from 'testUtils';
import LightBrightApp from './LightBrightApp';

describe('LightBrightApp', () => {
  afterEach(cleanup);

  test('should render a number of cells equal to its numCells prop', () => {
    const { container } = render(<LightBrightApp numCells={30} />);
    expect(container.querySelectorAll('[data-cell]').length).toBe(30);
  });

  describe('simple clicks and keypresses', () => {
    test('should color a Cell when it is clicked', () => {
      // jsdom can't test CSS custom properties yet.
      const { getByTestId } = render(<LightBrightApp numCells={5} />);
      const cell = getByTestId('2');

      fireEvent.mouseDown(cell);

      expect(cell.classList.contains('Cell___isOn')).toBe(true);
      expect(cell.classList.contains('Cell')).toBe(true);
    });

    test('should color a Cell which has a keypress event with {Enter} or {Space}', () => {
      const { getByTestId } = render(<LightBrightApp numCells={5} />);
      const cell1 = getByTestId('1');
      const cell2 = getByTestId('2');
      const cell3 = getByTestId('3');

      fireEvent.keyDown(cell1, { key: 'Enter' });
      fireEvent.keyDown(cell2, { key: ' ' });
      fireEvent.keyDown(cell3, { key: 'A' });

      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(true);
      expect(cell3.classList.contains('Cell___isOn')).toBe(false);
    });
  });

  describe('drag functionality', () => {
    test('when clicking on a Cell and not releasing, mousing over other Cells should color them', () => {
      const { getByTestId } = render(<LightBrightApp numCells={5} />);
      const cell1 = getByTestId('1');
      const cell2 = getByTestId('2');
      const cell3 = getByTestId('3');
      const cell4 = getByTestId('4');
      const board = getByTestId('board');

      // Don't color cells if mousedown has not happened yet
      fireEvent.mouseOver(cell2);
      expect(cell1.classList.contains('Cell___isOn')).toBe(false);

      // Trigger mousedown and mouseover
      fireEvent.mouseDown(cell1);
      fireEvent.mouseOver(cell2);
      fireEvent.mouseOver(cell3);

      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(true);
      expect(cell3.classList.contains('Cell___isOn')).toBe(true);

      // Trigger mouseup on board
      fireEvent.mouseUp(board);

      // Further mouseovers should have no effect
      fireEvent.mouseOver(cell4);
      expect(cell4.classList.contains('Cell___isOn')).toBe(false);
    });

    test('keypress events with {Enter} or {Space}, followed by mousing over other Cells, should only color the Cell with the keypress event', () => {
      const { getByTestId } = render(<LightBrightApp numCells={5} />);
      const cell1 = getByTestId('1');
      const cell2 = getByTestId('2');

      fireEvent.keyDown(cell1, { key: 'Enter' });
      fireEvent.mouseOver(cell2);

      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(false);
    });
  });

  describe('reset last color button', () => {
    afterEach(cleanup);

    test('should reset the last color from single click', () => {
      const { getByTestId } = render(<LightBrightApp numCells={5} />);
      const cell = getByTestId('1');
      const resetLastColorBtn = getByTestId('resetLastColorBtn');

      fireEvent.mouseDown(cell);
      fireEvent.click(resetLastColorBtn);

      expect(cell.classList.contains('Cell')).toBe(true);
      expect(cell.classList.contains('Cell___isOn')).toBe(false);
    });

    test('should reset a color unless the board is empty, even when some colors have been overwritten', () => {
      const { getByTestId } = render(<LightBrightApp numCells={5} />);
      const cell1 = getByTestId('1');
      const cell2 = getByTestId('2');
      const resetLastColorBtn = getByTestId('resetLastColorBtn');

      fireEvent.mouseDown(cell1);
      fireEvent.mouseDown(cell2);
      fireEvent.mouseDown(cell2);

      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(true);

      fireEvent.click(resetLastColorBtn);
      expect(cell1.classList.contains('Cell___isOn')).toBe(true);
      expect(cell2.classList.contains('Cell___isOn')).toBe(false);

      fireEvent.click(resetLastColorBtn);
      expect(cell1.classList.contains('Cell___isOn')).toBe(false);
      expect(cell2.classList.contains('Cell___isOn')).toBe(false);
    });

    /*
    test('should do nothing if board is already empty', () => {
    });
    */
  });
});

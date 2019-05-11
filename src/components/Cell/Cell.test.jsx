import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Cell from './Cell';

afterEach(cleanup);

test('Cell should have correct styling when color prop exists', () => {
  const hue = '150';
  const { getByTestId } = render(<Cell index="1" hue={hue} />);
  const cellNode = getByTestId('1');
  expect(cellNode.classList.contains('Cell')).toBe(true);
  expect(cellNode.classList.contains('Cell___isOn')).toBe(true);
  // TODO: jsdom can't test for CSS custom properties. Use a different testing environment
});

describe('Cell events', () => {
  test('Cell should fire its handleClick prop on mousedown', () => {
    const mockHandleClick = jest.fn();
    const { getByTestId } = render(
      <Cell index="1" handleClick={mockHandleClick} />,
    );
    const cellNode = getByTestId('1');

    fireEvent.mouseDown(cellNode);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  test('Cell should fire its handleClick prop on keydown with "Space" or "Enter" but not other keys', () => {
    const mockHandleClick = jest.fn();
    const { getByTestId } = render(
      <Cell index="1" handleClick={mockHandleClick} />,
    );
    const cellNode = getByTestId('1');

    fireEvent.keyDown(cellNode, { key: 'Enter' });
    fireEvent.keyDown(cellNode, { key: ' ' });
    fireEvent.keyDown(cellNode, { key: 'Tab' });
    fireEvent.keyDown(cellNode, { key: 'A' });

    expect(mockHandleClick).toHaveBeenCalledTimes(2);
  });

  test('Cell being moused over should trigger handleMouseOver prop', () => {
    const mockHandleMouseOver = jest.fn();
    const { getByTestId } = render(
      <Cell index="1" handleMouseOver={mockHandleMouseOver} />,
    );
    const cellNode = getByTestId('1');

    fireEvent.mouseOver(cellNode);

    expect(mockHandleMouseOver).toHaveBeenCalledTimes(1);
  });
});

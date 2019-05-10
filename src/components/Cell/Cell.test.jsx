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

test('Cell should fire its handleClick prop when clicked', () => {
  const mockHandleClick = jest.fn();
  const { getByTestId } = render(
    <Cell index="1" handleClick={mockHandleClick} />,
  );
  const cellNode = getByTestId('1');

  fireEvent.click(cellNode);

  expect(mockHandleClick).toHaveBeenCalledTimes(1);
});

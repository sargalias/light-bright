import React from 'react';
import { render, cleanup } from 'react-testing-library';
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

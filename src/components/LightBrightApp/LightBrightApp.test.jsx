import React from 'react';
import { render, cleanup, fireEvent } from 'testUtils'; // eslint-disable-line
import LightBrightApp from './LightBrightApp';

describe('LightBrightApp', () => {
  afterEach(cleanup);

  test('should render a number of cells equal to its numCells prop', () => {
    const { container } = render(<LightBrightApp numCells={30} />);
    expect(container.querySelectorAll('[data-cell]').length).toBe(30);
  });

  /*
  test('click on cell should color it in', () => {
    const { getByTestId } = render(<LightBrightApp />);
    const cell30 = getByTestId('30');
    fireEvent.click(cell30);
    expect(cell30.style.backgroundImage).not.toBeFalsy();
  });
  */
});

import React from 'react';
import { render, cleanup, fireEvent } from 'testUtils';
import LightBrightApp from './LightBrightApp';

afterEach(cleanup);

test('LightBrightApp', () => {
  const { getByTestId } = render(<LightBrightApp />);
  const cell30 = getByTestId(30);
  fireEvent.click(cell30);
  expect(cell30.style.backgroundImage).not.toBeFalsy();
});

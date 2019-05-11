import React from 'react';
import { render, fireEvent, cleanup } from 'testUtils'; // eslint-disable-line import/named
import Board from './Board';

// mock uneeded stuff out

afterEach(cleanup);

test('Board should call its handleBoardMouseUp prop on mouseup event', () => {
  jest.resetModules();
  jest.doMock('components/Cell', () => () => null);
  const mockHandleBoardMouseUp = jest.fn();
  const { getByTestId } = render(
    <Board cells={[]} handleBoardMouseUp={mockHandleBoardMouseUp} />,
  );
  const board = getByTestId('board');

  fireEvent.mouseUp(board);

  expect(mockHandleBoardMouseUp).toHaveBeenCalledTimes(1);
});

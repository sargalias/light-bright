import React from 'react';
import Cell from 'components/Cell';
import bemUtils from 'utilities/bemUtils';
import styles from './Board.scss';

const b = bemUtils(styles);

const Board = ({
  parentClass,
  cells,
  handleCellClick,
  handleCellMouseOver,
  handleBoardMouseUp,
}) => (
  <div
    className={b('', '', parentClass)}
    data-testid="board"
    onMouseUp={handleBoardMouseUp}
    onMouseLeave={handleBoardMouseUp}
    role="presentation"
  >
    {cells.map((cell, i) => (
      <Cell
        key={i} // eslint-disable-line react/no-array-index-key
        index={i}
        handleClick={handleCellClick}
        hue={cell}
        handleMouseOver={handleCellMouseOver}
      />
    ))}
  </div>
);

export default Board;

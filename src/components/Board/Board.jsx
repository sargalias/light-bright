import React from 'react';
import Cell from 'components/Cell';
import bemUtils from 'utilities/bemUtils';
import styles from './Board.scss';

const b = bemUtils(styles);

const Board = ({ parentClass, cells, handleCellClick }) => (
  <div className={b('', '', parentClass)}>
    {cells.map((cell, i) => (
      <Cell key={i} index={i} handleClick={handleCellClick} style={cell} />
    ))}
  </div>
);

export default Board;

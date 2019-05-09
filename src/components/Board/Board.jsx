import React from 'react';
import Cell from 'components/Cell';
import bemUtils from 'utilities/bemUtils';
import styles from './Board.scss';

const b = bemUtils(styles);

const Board = ({ parentClass, cells }) => (
  <div className={b('', '', parentClass)}>
    {cells.map((el, i) => (
      <Cell key={i} testId={i} />
    ))}
  </div>
);

export default Board;

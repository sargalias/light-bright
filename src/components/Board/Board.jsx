import React from 'react';
import Cell from 'components/Cell';
import bemUtils from 'utilities/bemUtils';
import styles from './Board.scss';

const b = bemUtils(styles);

const createCells = num => {
  return Array.from({ length: num }, (el, i) => <Cell key={i} />);
};

const Board = ({ parentClass }) => (
  <div className={b('', '', parentClass)}>{createCells(80)}</div>
);

export default Board;

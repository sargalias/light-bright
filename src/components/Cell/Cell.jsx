import React from 'react';
import bemUtils from 'utilities/bemUtils';
import styles from './Cell.scss';

const b = bemUtils(styles);

const Cell = ({ parentClass, index, handleClick, style }) => (
  <div
    className={b('', '', parentClass)}
    data-testid={index}
    data-cell={index}
    onClick={handleClick}
    style={{ backgroundImage: style }}
  />
);

export default Cell;

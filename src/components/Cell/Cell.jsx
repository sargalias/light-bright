import React from 'react';
import styles from './Cell.scss';

const Cell = ({ parentClass, index, handleClick, hue }) => (
  <button
    type="button"
    className={`${styles.Cell} ${hue ? styles.Cell___isOn : ''} ${parentClass ||
      ''}`}
    data-testid={index}
    data-cell={index}
    onClick={handleClick}
    style={{ '--hue': hue }}
  />
);

export default Cell;

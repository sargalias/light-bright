import React from 'react';
import styles from './Cell.scss';

const Cell = ({ parentClass, index, handleClick, hue }) => {
  const handleKeyDown = e => {
    if (['Enter', ' '].includes(e.key)) {
      handleClick(e);
    }
  };

  return (
    <button
      type="button"
      className={`${styles.Cell} ${
        hue ? styles.Cell___isOn : ''
      } ${parentClass || ''}`}
      data-testid={index}
      data-cell={index}
      onMouseDown={handleClick}
      onKeyDown={handleKeyDown}
      style={{ '--hue': hue }}
    />
  );
};

export default Cell;

import React from 'react';
import styles from './Cell.scss';

const Cell = ({
  parentClass,
  index,
  handleClick,
  handleMouseOver,
  handleKeyPress,
  hue,
}) => {
  const handleKeyDown = e => {
    if (['Enter', ' '].includes(e.key)) {
      handleKeyPress(e);
    }
  };

  return (
    <button
      type="button"
      className={`
        ${styles.Cell} ${Number.isInteger(hue) ? styles.Cell___isOn : ''}
      ${parentClass || ''}
      `}
      data-testid={index}
      data-cell={index}
      onMouseDown={handleClick}
      onKeyDown={handleKeyDown}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      style={{ '--hue': hue }}
    />
  );
};

export default Cell;

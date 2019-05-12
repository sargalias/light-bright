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
      onKeyDown={handleKeyPress}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      style={{ '--hue': hue }}
    />
  );
};

export default Cell;

import React, { useState, useCallback } from 'react';
import MainContentHeader from 'components/MainContentHeader';
import LightBrightGame from 'components/LightBrightGame';
import Instructions from 'components/Instructions';
import randomHue from 'logic/randomHue';
import bemUtils from 'utilities/bemUtils';
import styles from './LightBrightApp.scss';

const b = bemUtils(styles);

const LightBrightApp = ({ parentClass, numCells }) => {
  const [cells, setCells] = useState(Array.from({ length: numCells }));
  const [isDragging, setIsDragging] = useState(false);

  const lightCell = useCallback(
    e => {
      const cellIndex = Number(e.target.getAttribute('data-cell'));
      const newCells = Array.from(cells, (cell, i) =>
        i === cellIndex ? randomHue() : cell,
      );
      setCells(newCells);
    },
    [cells],
  );

  const handleCellClick = useCallback(
    e => {
      setIsDragging(true);
      lightCell(e);
    },
    [lightCell],
  );

  const handleMouseOver = useCallback(
    e => {
      if (isDragging) {
        lightCell(e);
      }
    },
    [lightCell, isDragging],
  );

  return (
    <div className={b('', '', parentClass)}>
      <MainContentHeader parentClass={b('mainContentHeader')} />
      <LightBrightGame
        parentClass={b('lightBrightGame')}
        cells={cells}
        handleCellClick={handleCellClick}
        handleMouseOver={handleMouseOver}
      />
      <Instructions parentClass={b('instructions')} />
    </div>
  );
};

export default LightBrightApp;

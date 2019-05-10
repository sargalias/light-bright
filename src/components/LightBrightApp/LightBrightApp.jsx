import React, { useState, useCallback } from 'react';
import MainContentHeader from 'components/MainContentHeader';
import LightBrightGame from 'components/LightBrightGame';
import Instructions from 'components/Instructions';
import bemUtils from 'utilities/bemUtils';
import styles from './LightBrightApp.scss';

const b = bemUtils(styles);

const LightBrightApp = ({ parentClass, numCells }) => {
  const [cells, setCells] = useState(Array.from({ length: numCells }));

  const handleCellClick = useCallback(
    e => {
      const cellIndex = e.target.getAttribute('data-cell');
      const newCells = Array.from(cells);
      newCells[cellIndex] = '250'; // eslint-disable-line security/detect-object-injection
      setCells(newCells);
    },
    [cells],
  );

  return (
    <div className={b('', '', parentClass)}>
      <MainContentHeader parentClass={b('mainContentHeader')} />
      <LightBrightGame
        parentClass={b('lightBrightGame')}
        cells={cells}
        handleCellClick={handleCellClick}
      />
      <Instructions parentClass={b('instructions')} />
    </div>
  );
};

export default LightBrightApp;

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
  const [currentColor, setCurrentColor] = useState();

  const getCellIndex = useCallback(
    e => Number(e.target.getAttribute('data-cell')),
    [],
  );

  const lightCells = useCallback(
    (oldCells, cellIndexToColor, color) =>
      Array.from(oldCells, (cell, i) =>
        i === cellIndexToColor ? color : cell,
      ),
    [],
  );

  const handleCellClick = useCallback(
    e => {
      const cellIndex = getCellIndex(e);
      const newColor = randomHue();
      const newCells = lightCells(cells, cellIndex, newColor);
      setCurrentColor(newColor);
      setIsDragging(true);
      setCells(newCells);
    },
    [getCellIndex, cells, lightCells],
  );

  const handleCellMouseOver = useCallback(
    e => {
      if (isDragging) {
        const cellIndex = getCellIndex(e);
        const newCells = lightCells(cells, cellIndex, currentColor);
        setCells(newCells);
      }
    },
    [cells, isDragging, currentColor, getCellIndex, lightCells],
  );

  const handleCellKeyPress = useCallback(
    e => {
      if (['Enter', ' '].includes(e.key)) {
        const cellIndex = getCellIndex(e);
        const newColor = randomHue();
        const newCells = lightCells(cells, cellIndex, newColor);
        setCells(newCells);
      }
    },
    [cells, getCellIndex, lightCells],
  );

  const handleBoardMouseUp = useCallback(() => {
    setIsDragging(false);
    setCurrentColor(undefined);
  }, [setIsDragging]);

  return (
    <div className={b('', '', parentClass)}>
      <MainContentHeader parentClass={b('mainContentHeader')} />
      <LightBrightGame
        parentClass={b('lightBrightGame')}
        cells={cells}
        handleCellClick={handleCellClick}
        handleCellKeyPress={handleCellKeyPress}
        handleCellMouseOver={handleCellMouseOver}
        handleBoardMouseUp={handleBoardMouseUp}
      />
      <Instructions parentClass={b('instructions')} />
    </div>
  );
};

export default LightBrightApp;

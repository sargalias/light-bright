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

  const lightCell = useCallback(
    (cellIndex, newColor) => {
      let color;

      // isDragging is true and currentColor exists
      if (isDragging && currentColor !== undefined) {
        color = currentColor;
      }
      // Cell was clicked, so dragging started but hasn't been set by React yet.
      // We pass in the newColor which wil be the currentColor next render.
      else if (newColor) {
        color = newColor;
      }

      // otherwise generate new color
      else {
        color = randomHue();
      }
      const newCells = Array.from(cells, (cell, i) =>
        i === cellIndex ? color : cell,
      );
      setCells(newCells);
    },
    [cells, currentColor, isDragging],
  );

  const handleCellClick = useCallback(
    e => {
      const cellIndex = getCellIndex(e);
      const newColor = randomHue();
      setCurrentColor(newColor);
      setIsDragging(true);

      lightCell(cellIndex, newColor);
    },
    [lightCell, getCellIndex],
  );

  const handleCellMouseOver = useCallback(
    e => {
      if (isDragging) {
        const cellIndex = getCellIndex(e);
        lightCell(cellIndex);
      }
    },
    [lightCell, isDragging, getCellIndex],
  );

  const handleCellKeyPress = useCallback(
    e => {
      if (['Enter', ' '].includes(e.key)) {
        const cellIndex = getCellIndex(e);
        lightCell(cellIndex);
      }
    },
    [lightCell, getCellIndex],
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

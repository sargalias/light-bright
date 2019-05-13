import { useState } from 'react';
import randomHue from 'logic/randomHue'; // eslint-disable-line import/export

const getCellIndex = e => Number(e.target.getAttribute('data-cell'));

const lightCells = (oldCells, cellIndexToColor, color) =>
  Array.from(oldCells, (cell, i) => (i === cellIndexToColor ? color : cell));

const LightBrightApp = numCells => {
  const [cells, setCells] = useState(Array.from({ length: numCells }));
  const [isDragging, setIsDragging] = useState(false);
  const [currentColor, setCurrentColor] = useState();

  const handleCellClick = e => {
    const cellIndex = getCellIndex(e);
    const newColor = randomHue();
    const newCells = lightCells(cells, cellIndex, newColor);
    setCurrentColor(newColor);
    setIsDragging(true);
    setCells(newCells);
  };

  const handleCellMouseOver = e => {
    if (isDragging) {
      const cellIndex = getCellIndex(e);
      const newCells = lightCells(cells, cellIndex, currentColor);
      setCells(newCells);
    }
  };

  const handleCellKeyPress = e => {
    if (['Enter', ' '].includes(e.key)) {
      const cellIndex = getCellIndex(e);
      const newColor = randomHue();
      const newCells = lightCells(cells, cellIndex, newColor);
      setCells(newCells);
    }
  };

  const handleBoardMouseUp = () => {
    setIsDragging(false);
    setCurrentColor(undefined);
  };

  return {
    cells,
    handleBoardMouseUp,
    handleCellKeyPress,
    handleCellMouseOver,
    handleCellClick,
  };
};

export default LightBrightApp;

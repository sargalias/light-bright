import { useState, useCallback } from 'react';
import randomHue from 'logic/randomHue'; // eslint-disable-line import/export

const LightBrightApp = numCells => {
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

  return {
    cells,
    handleBoardMouseUp,
    handleCellKeyPress,
    handleCellMouseOver,
    handleCellClick,
  };
};

export default LightBrightApp;

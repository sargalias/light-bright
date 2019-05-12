import React from 'react';
import MainContentHeader from 'components/MainContentHeader';
import LightBrightGame from 'components/LightBrightGame';
import Instructions from 'components/Instructions';
import bemUtils from 'utilities/bemUtils';
import useLightBrightAppLogic from 'logic/useLightBrightApp';
import styles from './LightBrightApp.scss';

const b = bemUtils(styles);

const LightBrightApp = ({ parentClass, numCells }) => {
  const {
    cells,
    handleBoardMouseUp,
    handleCellKeyPress,
    handleCellMouseOver,
    handleCellClick,
  } = useLightBrightAppLogic(numCells);

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

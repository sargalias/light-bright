import React from 'react';
import Controls from 'components/Controls';
import Board from 'components/Board';
import bemUtils from 'utilities/bemUtils';
import styles from './LightBrightGame.scss';

const b = bemUtils(styles);

const LightBrightGame = ({
  parentClass,
  cells,
  handleCellClick,
  handleCellMouseOver,
  handleBoardMouseUp,
  handleCellKeyPress,
  handleResetLastColor,
  handleResetAll,
  handleCellDoubleClick,
}) => (
  <div className={b('', '', parentClass)}>
    <Controls
      parentClass={b('controls')}
      handleResetLastColor={handleResetLastColor}
      handleResetAll={handleResetAll}
    />
    <Board
      cells={cells}
      handleCellClick={handleCellClick}
      handleCellMouseOver={handleCellMouseOver}
      handleCellKeyPress={handleCellKeyPress}
      handleBoardMouseUp={handleBoardMouseUp}
      handleCellDoubleClick={handleCellDoubleClick}
    />
  </div>
);

export default LightBrightGame;

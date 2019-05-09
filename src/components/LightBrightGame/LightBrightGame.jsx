import React from 'react';
import Controls from 'components/Controls';
import Board from 'components/Board';
import bemUtils from 'utilities/bemUtils';
import styles from './LightBrightGame.scss';

const b = bemUtils(styles);

const LightBrightGame = ({ parentClass, cells, handleCellClick }) => (
  <div className={b('', '', parentClass)}>
    <Controls parentClass={b('controls')} />
    <Board cells={cells} handleCellClick={handleCellClick} />
  </div>
);

export default LightBrightGame;

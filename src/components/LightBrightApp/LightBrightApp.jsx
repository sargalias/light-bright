import React, { useState } from 'react';
import MainContentHeader from 'components/MainContentHeader';
import LightBrightGame from 'components/LightBrightGame';
import Instructions from 'components/Instructions';
import bemUtils from 'utilities/bemUtils';
import styles from './LightBrightApp.scss';

const b = bemUtils(styles);

const LightBrightApp = ({ parentClass, numCells }) => {
  const [cells, setCells] = useState(Array.from({ length: numCells }));

  return (
    <div className={b('', '', parentClass)}>
      <MainContentHeader parentClass={b('mainContentHeader')} />
      <LightBrightGame parentClass={b('lightBrightGame')} cells={cells} />
      <Instructions parentClass={b('instructions')} />
    </div>
  );
};

export default LightBrightApp;

import React from 'react';
import Button from 'components/Button';
import bemUtils from 'utilities/bemUtils';
import styles from './Controls.scss';

const b = bemUtils(styles);

const Controls = ({ parentClass, handleResetLastColor }) => (
  <div className={b('', '', parentClass)}>
    <Button
      text="Reset last color"
      id="resetLastColorBtn"
      handleResetLastColor={handleResetLastColor}
    />
    <Button text="Reset all" />
  </div>
);

export default Controls;

import React from 'react';
import bemUtils from 'utilities/bemUtils';
import styles from './Cell.scss';

const b = bemUtils(styles);

const Cell = ({ parentClass, testId }) => (
  <div className={b('', '', parentClass)} data-testid={testId} />
);

export default Cell;

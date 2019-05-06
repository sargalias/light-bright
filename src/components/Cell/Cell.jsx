import React from 'react';
import bemUtils from 'utilities/bemUtils';
import styles from './Cell.scss';

const b = bemUtils(styles);

const Cell = ({ parentClass }) => <div className={b('', '', parentClass)} />;

export default Cell;

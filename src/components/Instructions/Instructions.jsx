import React from 'react';
import bemUtils from 'utilities/bemUtils';
import styles from './Instructions.scss';

const b = bemUtils(styles);

const Instructions = ({ parentClass }) => (
  <section className={b('', '', parentClass)}>
    <h2 className={b('heading')}>Instructions</h2>
    <ul>
      <li>Click: Paint a circle with a unique color.</li>
      <li>
        Click on a circle, then drag: Generate a unique color and paint circles
        with it.
      </li>
      <li>Reset last color: Unpaint the most recently painted circles.</li>
      <li>Reset all: Unpaint all circles.</li>
    </ul>
  </section>
);

export default Instructions;

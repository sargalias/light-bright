import React from 'react';
import bemUtils from 'utilities/bemUtils';
import styles from './Footer.scss';

const b = bemUtils(styles);

const Footer = ({ parentClass }) => (
  <div className={b('', '', parentClass)}>
    <div className={b('container')}>
      <p className={b('text')}>
        &copy; Spyros Argalias
        {new Date().getFullYear()}
      </p>
      <p className={b('text')}>
        <a
          href="https://github.com/sargalias/light-bright"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code
        </a>
      </p>
    </div>
  </div>
);

export default Footer;

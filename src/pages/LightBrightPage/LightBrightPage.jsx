import React from 'react';
import MainContentHeader from 'components/MainContentHeader';
import LightBrightGame from 'components/LightBrightGame';
import Footer from 'components/Footer';
import bemUtils from 'utilities/bemUtils';
import styles from './LightBrightPage.scss';

const b = bemUtils(styles);

const LightBrightPage = () => (
  <main className={b()}>
    <MainContentHeader parentClass={b('mainContentHeader')} />
    <LightBrightGame parentClass={b('lightBrightGame')} />
    <Footer />
  </main>
);

export default LightBrightPage;

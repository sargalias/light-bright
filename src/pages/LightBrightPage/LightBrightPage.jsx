import React from 'react';
import LightBrightApp from 'components/LightBrightApp';
import Footer from 'layout/Footer';
import bemUtils from 'utilities/bemUtils';
import styles from './LightBrightPage.scss';

const b = bemUtils(styles);

const LightBrightPage = () => (
  <>
    <main className={b()}>
      <LightBrightApp parentClass={b('lightBrightApp')} />
    </main>
    <Footer />
  </>
);

export default LightBrightPage;

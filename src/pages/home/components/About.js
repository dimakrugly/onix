import React, { memo } from 'react';
import '../scss/about.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Button/Button';

export const About = memo(() => {
  const { t } = useTranslation();
  return (
    <section className="about" id="about">
      <div className="aboutImageContainer" />
      <div className="wrapper aboutFlexContainer">
        <div className="aboutInfoContainer">
          <p className="aboutName">Pompeo Pottery </p>
          <div className="aboutAnimationContainer">
            <h1 className="aboutMainText">
              {t('about.title')}
              <span>&</span>
              {' '}
              {t('about.collection')}
            </h1>
            <p className="aboutSubText">
              {t('about.unique')}
            </p>
          </div>
          <Button theme="dark" className="aboutButton" text={t('about.shop')} />
        </div>
      </div>
    </section>
  );
});

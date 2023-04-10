import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components/Button/Button';
import './banner.scss';

export const Banner = memo(() => {
  const { t } = useTranslation();

  return (
    <section className="banner">
      <div className="wrapper bannerWrapper">
        <p className="bannerInfo">pompeo pottery</p>
        <h2 className="bannerTitle">{t('banner.ready')}</h2>
        <p className="bannerText">
          {t('banner.text')}
        </p>
        <Button text={t('banner.new')} />
      </div>
    </section>
  );
});

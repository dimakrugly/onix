import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/subscribe.scss';
import { SubscribeForm } from '../../../components/SubscribeForm/SubscribeForm';

export const Subscribe = memo(() => {
  const { t } = useTranslation();
  return (
    <section className="subscribe">
      <div className="subscribeIcon" />
      <p className="subscribeInfo">latest news</p>
      <h2 className="subscribeTitle">
        {t('subscribe.latest')}
        <span>&</span>
        {t('subscribe.newsData')}
      </h2>
      <div className="formFlex">
        <SubscribeForm />
      </div>
    </section>
  );
})

import React, { memo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/ceramics.scss';
import ThemeContext from '../../../providers/ThemeProvider';

export const Ceramics = memo(() => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <section className="ceramics" data-theme={theme}>
      <div className="wrapper">
        <div className="ceramicsGrid">
          <div className="ceramicsGridLeft">
            <div className="ceramicsRectangle" />
            <div className="ceramicsVaseImg" />
            <h3 className="ceramicsGridTitle">{t('ceramics.orange')}</h3>
            <p className="ceramicsGridSubtitle">
              {t('ceramics.orangeInfo')}
            </p>
            <a className="ceramicsLink">{t('ceramics.details')}</a>
          </div>
          <div className="ceramicsGridRight">
            <h3 className="ceramicsGridTitle">{t('ceramics.gold')}</h3>
            <p className="ceramicsGridSubtitle">
              {t('ceramics.goldInfo')}
            </p>
            <a className="ceramicsLink">{t('ceramics.details')}</a>
            <div className="ceramicsRectangle" />
            <div className="ceramicsVaseRed" />
          </div>
        </div>
      </div>
      <p className="ceramicsSideText">{t('ceramics.featured')}</p>
    </section>
  );
});

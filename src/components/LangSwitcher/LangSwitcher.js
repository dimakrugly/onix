import React from 'react';
import { useTranslation } from 'react-i18next';
import ua from '../../assets/img/ua.jpeg';
import en from '../../assets/img/en.jpg';
import './langSwitcher.scss';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="langSwitcher">
      <button type="button" className="en" onClick={() => i18n.changeLanguage('en')}>
        <img className="flag" src={en} alt="en" />
      </button>
      <button type="button" className="en" onClick={() => i18n.changeLanguage('ua')}>
        <img className="flag" src={ua} alt="UA" />
      </button>
    </div>
  )
};

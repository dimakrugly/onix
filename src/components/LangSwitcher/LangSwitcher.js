import React from 'react';
import translate from '../../services/translate/TranslateService';
import ua from '../../assets/img/ua.jpeg';
import en from '../../assets/img/en.jpg';
import './langSwitcher.scss';

export const LangSwitcher = () => (
  <div className="langSwitcher">
    <button type="button" className="en" onClick={() => translate.changeLanguage('en')}>
      <img className="flag" src={en} alt="en" />
    </button>
    <button type="button" className="en" onClick={() => translate.changeLanguage('ua')}>
      <img className="flag" src={ua} alt="UA" />
    </button>
  </div>
);

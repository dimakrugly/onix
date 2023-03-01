import React from 'react';
import translate from '../../services/translate/TranslateService';

export const LangSwitcher = () => (
  <div className="langSwitcher">
    <button type="button" className="en" onClick={() => translate.changeLanguage('en')}>
      <span>EN</span>
    </button>

    <button type="button" className="ua" onClick={() => translate.changeLanguage('ua')}>
      <span>UA</span>
    </button>
  </div>
);

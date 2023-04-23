import React, { useContext } from 'react';

import ThemeContext from '../../providers/ThemeProvider';
import './Switcher.scss';
import { THEME_DARK, THEME_LIGHT } from '../../constants/constants';

export const Switcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="switcherArea">
      <label htmlFor="switcher" className="switch">
        <input id="switcher" type="checkbox" onChange={toggleTheme} />
        <span className="slider" />
      </label>
      <p className="headerCartText">
        {theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT}
      </p>
    </div>
  );
};

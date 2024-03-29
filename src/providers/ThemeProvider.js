import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { THEME_DARK, THEME_LIGHT } from '../constants/constants';

const ThemeContext = createContext({
  theme: THEME_LIGHT,
  toggleTheme: () => {},
});

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_LIGHT);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
import ThemeContext from '../../providers/ThemeProvider';

export const Button = ({
  text, variant, disabled, onClick,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      data-theme={theme}
      type="button"
      disabled={disabled}
      className={`
  ${styles.button} 
  ${styles[variant]}
  ${disabled ? styles.disabled : ''}
  `}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'small', 'cart']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  onClick: () => {},
};

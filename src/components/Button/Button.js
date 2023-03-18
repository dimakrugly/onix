import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { buttonVariants } from '../../constants/constants';

export const Button = ({
  text, variant, disabled, onClick,
}) => {
  return (
    <button type="button" disabled={disabled} className={`button ${variant} ${disabled ? 'disabled': ''}`} onClick={onClick}>
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

import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({
  text, variant, disabled, onClick,
}) => {
  let classNames = 'Button';
  switch (variant) {
    case 'primary':
      classNames += ' buttonPrimary';
      break;
    case 'secondary':
      classNames += ' buttonSecondary';
      break;
    case 'small':
      classNames += ' buttonSmall';
      break;
    case 'cart':
      classNames += ' buttonCart';
      break;
    default:
      classNames += ' ';
  }

  let disabledStyle = 'disabled';
  switch (variant) {
    case 'primary':
      disabledStyle += ' disabledPrimary';
      break;
    case 'small':
      disabledStyle += ' disabledSmall';
      break;
    default:
      disabledStyle += ' ';
  }

  return (
    <button type="button" disabled={disabled} className={`${classNames} ${disabled ? disabledStyle : null}`} onClick={onClick}>
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

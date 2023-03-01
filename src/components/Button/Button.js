import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { buttonVariants } from '../../constants/constants';

export const Button = ({
  text, variant, disabled, onClick,
}) => {
  let classNames = 'Button';
  switch (variant) {
    case buttonVariants.primary:
      classNames += ' buttonPrimary';
      break;
    case buttonVariants.secondary:
      classNames += ' buttonSecondary';
      break;
    case buttonVariants.small:
      classNames += ' buttonSmall';
      break;
    case buttonVariants.cart:
      classNames += ' buttonCart';
      break;
    default:
      classNames += ' ';
  }

  let disabledStyle = 'disabled';
  switch (variant) {
    case buttonVariants.primary:
      disabledStyle += ' disabledPrimary';
      break;
    case buttonVariants.secondary:
      disabledStyle += ' disabledSecondary';
      break;
    case buttonVariants.small:
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

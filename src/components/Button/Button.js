import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ text, variant, disabled }) => {
  const styleVariant = useMemo(() => {
    if (variant === 'primary') {
      return 'buttonPrimary';
    } if (variant === 'secondary') {
      return 'buttonSecondary';
    }
    return '';
  }, [variant]);

  return (
    <button type="button" disabled={disabled} className={`${styleVariant} ${disabled ? 'disabled' : null}`}>
      <span className="buttonText">{text}</span>
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
};

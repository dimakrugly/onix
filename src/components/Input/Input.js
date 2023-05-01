import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  className,
  onFocus,
}) => (
  <input
    id={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className={className}
    onFocus={onFocus}
  />
)
Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  name: undefined,
  placeholder: '',
  type: 'text',
  className: '',
  onFocus: () => {},
};

import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  isError,
  onBlur,
  touched,
}) => (
  <label htmlFor={name}>
    {label}
    <input
      id={name}
      className={`formControl ${isError && touched ? 'isInvalid' : null}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  </label>
);

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
};

Input.defaultProps = {
  label: undefined,
  name: undefined,
  placeholder: '',
  type: 'text',
  isError: undefined,
};

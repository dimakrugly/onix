import React from 'react';
import PropTypes from 'prop-types';
import './scrollUpButton.scss';

export const ScrollUpButton = ({ onClick, isShownScrollButton }) => (
  <button type="button" className={`buttonTop ${isShownScrollButton ? 'visible' : null}`} onClick={onClick}><span>⤊</span></button>
);

ScrollUpButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShownScrollButton: PropTypes.bool.isRequired,
};

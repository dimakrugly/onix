import './UpButton.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { BUTTON_VARIANTS } from '../../constants/constants';

export const UpButton = ({ isShownScrollButton, onClick }) => (
  <div className={`upButtonArea ${isShownScrollButton ? 'visible' : null}`}>
    <Button
      text="Up!"
      variant={BUTTON_VARIANTS.secondary}
      type="button"
      onClick={onClick}
    />
  </div>
)

UpButton.propTypes = {
  isShownScrollButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

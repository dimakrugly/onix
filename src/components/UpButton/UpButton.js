import './UpButton.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { buttonVariants } from '../../constants/constants';

export const UpButton = ({ isShownScrollButton, onClick }) => (
  <div className={`upButtonArea ${isShownScrollButton ? 'visible' : null}`}>
    <Button
      text="Up!"
      variant={buttonVariants.secondary}
      type="button"
      onClick={onClick}
    />
  </div>
)

UpButton.propTypes = {
  isShownScrollButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

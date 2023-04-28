import React from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/img/sad.png';
import { Button } from '../Button/Button';
import { BUTTON_VARIANTS } from '../../constants/constants';
import './Error.scss'

export const Error = ({ error, onClick }) => (
  <div className="errorFlex">
    <div>
      <img src={image} alt="sad dog" />
      <p className="errorText">Something went wrong</p>
      <p className="errorText">{error}</p>
      <p className="errorText">How about?</p>
      <Button variant={BUTTON_VARIANTS.primary} text="Try Again!" onClick={onClick} />
    </div>
  </div>
)

Error.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  onClick: PropTypes.func,
}

Error.defaultProps = {
  onClick: () => {},
}

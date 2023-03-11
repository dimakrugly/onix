import React from 'react';
import './image.scss';
import PropTypes from 'prop-types';
import loader from '../../assets/img/cardLoading.png';

export const Image = ({
  alt, className, src, onImageLoaded, isLoaded, onError,
}) => (
  <img
    src={isLoaded ? src : loader}
    alt={alt}
    className={className}
    onLoad={onImageLoaded}
    onError={onError}
  />

);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onImageLoaded: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  onError: PropTypes.func.isRequired,
};

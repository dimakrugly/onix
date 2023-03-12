import React from 'react';
import './image.scss';
import PropTypes from 'prop-types';

export const Image = ({
  alt, className, src, onError,
}) => (
  <img
    src={src}
    alt={alt}
    className={className}
    onLoad={() => { console.log(`image ${src} downloaded successfully`); }}
    onError={onError}
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onError: PropTypes.func.isRequired,
};

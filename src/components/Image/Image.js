import React, { useState } from 'react';
import './image.scss';
import PropTypes from 'prop-types';
import { PLUG_IMAGE } from '../../constants/constants';

export const Image = ({
  alt, className, src,
}) => {
  const [isError, setIsError] = useState(false);

  const onError = () => {
    setIsError(true);
  };

  return (
    <img
      src={isError ? PLUG_IMAGE : src}
      alt={alt}
      className={className}
      onError={onError}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

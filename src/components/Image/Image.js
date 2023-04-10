import React, { useState } from 'react';
import './image.scss';
import PropTypes from 'prop-types';
import { plugImage } from '../../constants/constants';

export const Image = ({
  alt, className, src,
}) => {
  const [isError, setIsError] = useState(false);

  const onError = () => {
    setIsError(true);
  };

  return (
    <img
      src={isError ? plugImage : src}
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

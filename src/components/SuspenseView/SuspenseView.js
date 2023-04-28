import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';

export const SuspenseView = ({
  children,
  isLoading,
  isError,
  onRetryClick,
}) => {
  if (isLoading) {
    return (
      <Loader />
    );
  }
  if (isError) {
    return (
      <Error error={isError} onClick={onRetryClick} />
    );
  }

  return (
    children
  );
};

SuspenseView.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  onRetryClick: PropTypes.func,
};

SuspenseView.defaultProps = {
  onRetryClick: () => {},
}

import React from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/img/sad.png'
import { Loader } from '../Loader/Loader';
import './suspenseView.scss'

export const SuspenseView = ({
  children,
  isLoading,
  isError,
  onRetryClick,
}) => {
  if (isLoading) {
    return (
      <div className="suspenseFlex">
        <Loader />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="suspenseFlex">
        <div>
          <img src={image} alt="sad dog" />
          <p className="display-1 error-text">Error!</p>
          <p className="display-12">How about?</p>
          <button type="button" className="btn btn-secondary" onClick={onRetryClick}>Try Again!</button>
        </div>
      </div>
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

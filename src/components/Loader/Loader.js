import React from 'react';
import ReactLoading from 'react-loading';
import './loader.scss'

export const Loader = () => (
  <div className="loaderFlex">
    <ReactLoading height="10%" width="10%" type="spin" color="blue" />
  </div>
);

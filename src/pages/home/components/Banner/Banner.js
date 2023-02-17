import React from 'react';
import { Button } from '../../../../components/Button/Button';
import './banner.scss';

export const Banner = () => (
  <section className="banner">
    <div className="wrapper bannerWrapper">
      <p className="bannerInfo">pompeo pottery</p>
      <h2 className="bannerTitle">Ready to start shopping?</h2>
      <p className="bannerText">
        Lorem ipsum dolor sit amet,
        <a href="#header">consectetur adipiscing elit.</a>
        {' '}
        Suspendisse
        varius enim in eros elementum.
      </p>
      <Button text="New collection" />
    </div>
  </section>
);
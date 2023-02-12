import React from 'react';
import './subscribe.scss';
import PropTypes from 'prop-types';

export const Subscribe = ({ onChange }) => (
  <section className="subscribe">
    <div className="subscribeIcon" />
    <p className="subscribeInfo">latest news</p>
    <h2 className="subscribeTitle">
      Latest news
      <span>&</span>
      New updates
    </h2>
    <div className="subscribeMail">
      <label htmlFor="input">
        <input
          id="input"
          className="input"
          type="email"
          placeholder="      Enter your email here"
          onChange={onChange}
        />
      </label>
      <button type="button" className="mailButton">
        <span>subscribe</span>
      </button>
    </div>
    <div className="subscribeAgreement">
      <label htmlFor="check" className="checkboxContainer">
        <input id="check" type="checkbox" />
        <span className="mark" />
      </label>
      <p className="checkboxText">Sign up for our newsletter</p>
    </div>
  </section>
);

Subscribe.propTypes = {
  onChange: PropTypes.func.isRequired,
};

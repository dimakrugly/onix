import React from 'react';
import './subscribe.scss';
import PropTypes from 'prop-types';
import { Input } from '../../../../components/Input/Input';

export const Subscribe = ({
  onChange, isError, value, onBlur, touched,
}) => {
  console.log('=======================================================================');
  console.log(isError, 'IS_EROR');
  console.log(touched, 'Ta4ED');
  return (
    <section className="subscribe">
      <div className="subscribeIcon" />
      <p className="subscribeInfo">latest news</p>
      <h2 className="subscribeTitle">
        Latest news
        <span>&</span>
        New updates
      </h2>
      <div className="subscribeMail">
        <Input
          onChange={onChange}
          isError={isError}
          value={value}
          onBlur={onBlur}
          touched={touched}
        />
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
};

Subscribe.propTypes = {
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
};

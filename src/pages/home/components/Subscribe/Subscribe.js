import React from 'react';
import './subscribe.scss';
import PropTypes from 'prop-types';
import { Input } from '../../../../components/Input/Input';
import { Button } from '../../../../components/Button/Button';
import { buttonVariants } from '../../../../constants/constants';

export const Subscribe = ({
  onChangeMailInput, isError, value, onBlur, touched, onCheckedMail, checked, disabled,
}) => (
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
        onChange={onChangeMailInput}
        isError={isError}
        value={value}
        onBlur={onBlur}
        touched={touched}
        placeholder="Enter your email"
      />
      <Button
        text="subscribe"
        variant={buttonVariants.secondary}
        disabled={disabled}
      />
    </div>
    <div className="subscribeAgreement">
      <label htmlFor="check" className="checkboxContainer">
        <input id="check" type="checkbox" onChange={onCheckedMail} checked={checked} />
        <span className="mark" />
      </label>
      <p className="checkboxText">
        Subscribe to our newsletter
      </p>
    </div>
  </section>
);

Subscribe.propTypes = {
  onChangeMailInput: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  onCheckedMail: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

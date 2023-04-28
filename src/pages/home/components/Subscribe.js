import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/subscribe.scss';
import PropTypes from 'prop-types';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { BUTTON_VARIANTS } from '../../../constants/constants';

export const Subscribe = memo(({
  onChangeMailInput, isError, value, onBlur, touched, onCheckedMail, checked, disabled,
}) => {
  const { t } = useTranslation();
  return (
    <section className="subscribe">
      <div className="subscribeIcon" />
      <p className="subscribeInfo">latest news</p>
      <h2 className="subscribeTitle">
        {t('subscribe.latest')}
        <span>&</span>
        {t('subscribe.newsData')}
      </h2>
      <div className="subscribeMail">
        <Input
          onChange={onChangeMailInput}
          isError={isError}
          value={value}
          onBlur={onBlur}
          touched={touched}
          placeholder={t('subscribe.placeholder')}
        />
        <Button
          text={t('subscribe.subscribe')}
          variant={BUTTON_VARIANTS.secondary}
          disabled={disabled}
        />
      </div>
      <div className="subscribeAgreement">
        <label htmlFor="check" className="checkboxContainer">
          <input id="check" type="checkbox" onChange={onCheckedMail} checked={checked} />
          <span className="mark" />
        </label>
        <p className="checkboxText">
          {t('subscribe.message')}
        </p>
      </div>
    </section>
  );
})
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

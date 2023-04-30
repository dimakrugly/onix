import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Button } from '../Button/Button';
import { BUTTON_VARIANTS } from '../../constants/constants';
import './SubscribeForm.scss'
import { Input } from '../Input/Input';

export const SubscribeForm = () => {
  const { t } = useTranslation();

  const {
    handleChange,
    handleBlur,
    errors,
    isValid,
    dirty,
    touched,
    values: { email },
  } = useFormikContext();

  return (
    <div className="subscribeForm">
      <div className="formInput">
        <Input
          className={`formControl ${errors.email ? 'isInvalid' : null}`}
          placeholder={t('subscribe.placeholder')}
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button
          text={t('subscribe.subscribe')}
          variant={BUTTON_VARIANTS.secondary}
          disabled={!isValid || !dirty}
        />
      </div>
      {
        touched.email
          ? <p className="mailErrorText">{errors.email}</p> : null
      }
      <div className="subscribeAgreement">
        <label htmlFor="check" className="checkboxContainer">
          <input
            name="checkedMail"
            id="check"
            type="checkbox"
            onChange={
            handleChange
            }
          />
          <span className="mark" />
        </label>
        <p className="checkboxText">
          {t('subscribe.message')}
        </p>
      </div>
    </div>
  )
}

import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { EMAIL_REG_EXP } from '../../utils/validation';
import './SubscribeForm.scss'
import { SnackBar } from '../SnackBar/SnackBar';

export const SubscribeForm = ({
  showSnackBar,
  refSnackBar,
  register,
  handleSubmit,
  errors,
  isValid,
}) => {
  const { t } = useTranslation();

  return (
    <div className="subscribeForm">
      <SnackBar message="Thank you for signing up!" ref={refSnackBar} />
      <div>
        <form onSubmit={handleSubmit(showSnackBar)} className="formInput">
          <input
            className={`formControl ${errors?.email ? 'isInvalid' : null}`}
            {...register('email', {
              required: 'email field is required',
              pattern: {
                value: EMAIL_REG_EXP,
                message: 'Please enter valid email',
              },
            })}
            onBlur={handleSubmit}
          />
          <button
            type="submit"
            className={`subscribeButton ${!isValid && 'disabled'}`}
            disabled={!isValid}
            onClick={handleSubmit}
          >
            <span>{t('subscribe.subscribe')}</span>
          </button>
        </form>
        <p className="mailErrorText">{errors?.email && errors.email.message}</p>
        <div className="subscribeAgreement">
          <label htmlFor="check" className="checkboxContainer">
            <input
              name="checkedMail"
              id="check"
              type="checkbox"
              {...register('checkbox', {
                required: true,
              })}
            />
            <span className="mark" />
          </label>
        </div>
      </div>
    </div>
  )
}

SubscribeForm.propTypes = {
  showSnackBar: PropTypes.func.isRequired,
  refSnackBar: PropTypes.shape({
    current: PropTypes.shape({
      show: PropTypes.func.isRequired,
      hide: PropTypes.func.isRequired,
    }),
  }),
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    checkbox: PropTypes.string,
  }),
  isValid: PropTypes.bool.isRequired,
}

SubscribeForm.defaultProps = {
  errors: PropTypes.shape({
    email: '',
    checkbox: '',
  }),

  refSnackBar: {},
}

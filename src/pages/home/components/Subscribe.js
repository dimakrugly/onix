import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/subscribe.scss';
import PropTypes from 'prop-types';
import { SubscribeForm } from '../../../components/SubscribeForm/SubscribeForm';

export const Subscribe = memo(({
  showSnackBar,
  refSnackBar,
  register,
  handleSubmit,
  errors,
  isValid,
}) => {
  const { t } = useTranslation();
  return (
    <section className="subscribe">
      <div className="subscribeIcon" />
      <p className="subscribeInfo">latest news</p>
      <h2 className="subscribeTitle">
        {t('subscribe.latest')}
        <span>&</span>
        {t('subscribe.news')}
      </h2>
      <div className="formFlex">
        <SubscribeForm
          showSnackBar={showSnackBar}
          refSnackBar={refSnackBar}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          isValid={isValid}
        />
      </div>
    </section>
  );
})

Subscribe.propTypes = {
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

Subscribe.defaultProps = {
  errors: PropTypes.shape({
    email: '',
    checkbox: '',
  }),

  refSnackBar: {},
}

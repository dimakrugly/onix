import * as Yup from 'yup';

const emailRegexp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/i;

export const subscribeSchema = Yup.object().shape({
  email: Yup.string()
    .max(254, 'tooLong')
    .matches(emailRegexp, 'Please, enter correct email')
    .required('Email can not be empty'),
  checkedMail: Yup
    .bool()
    .oneOf([true], 'Field must be checked')
    .required(),
});

export const isValidEMail = (value) => !(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/i.test(value));
export const isTouchedMail = (e) => !!e;

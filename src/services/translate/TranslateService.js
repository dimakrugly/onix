import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ua from './ua/ua';
import en from './en/en';

export const resources = {
  en: { translation: en },
  ua: { translation: ua },
};

export const appLocales = Object.keys(resources);

class TranslateService {
  changeLanguage(locale) {
    i18n.changeLanguage(locale).then(() => {});
  }

  init() {
    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources,
        fallbackLng: appLocales,
        interpolation: {
          escapeValue: false,
        },
      });
  }
}

const translate = new TranslateService();

export default translate;

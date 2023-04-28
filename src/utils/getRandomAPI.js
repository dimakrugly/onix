import { urlBase } from '../constants/urlBase';

export const getRandomAPI = () => {
  const random = Math.round(Math.random(1));
  const correctUrl = urlBase.news;
  const incorrectUrl = 'incorrect_api';
  return random ? correctUrl : incorrectUrl;
};

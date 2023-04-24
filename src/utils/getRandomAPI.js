import { urlBase } from '../constants/urlBase';

export const getRandomAPI = () => {
  const random = Math.round(Math.random(1));
  const correctUrl = urlBase.news;
  const incorrectUrl = 'https://swapi.dev/api/432423planets';
  return random ? correctUrl : incorrectUrl;
};

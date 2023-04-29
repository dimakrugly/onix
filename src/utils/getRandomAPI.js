export const getRandomAPI = (correctUrl) => {
  const random = Math.round(Math.random(1));
  const incorrectUrl = 'incorrect_api';
  return random ? correctUrl : incorrectUrl;
};

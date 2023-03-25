export const extractId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.match(idRegExp)[1];
};

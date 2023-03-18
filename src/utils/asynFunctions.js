export const extractId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.match(idRegExp)[1];
};

export const transformData = (data) => data.reduce((acc, item) => {
  acc = [...acc, {
    id: extractId(item.url),
    name: item.name,
    weight: item.mass,
    height: item.height,
    image: `https://starwars-visualguide.com/assets/img/characters/${extractId(item.url)}.jpg`,
  }];
  return acc;
}, []);

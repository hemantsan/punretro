export const snapshotToArray = snapshot => {
  const returnArr = [];

  Object.keys(snapshot).map((key) => {
    returnArr.push({[key]: snapshot[key]});
  });

  return returnArr;
};

export const slugify = string => {
  return string.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
}
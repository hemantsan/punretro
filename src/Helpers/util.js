export const snapshotToArray = snapshot => {
  const returnArr = [];

  Object.keys(snapshot).map((key) => {
    returnArr.push({[key]: snapshot[key]});
  });

  return returnArr;
};
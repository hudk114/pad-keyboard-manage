export const objToArr = function (obj) {
  let a = [];
  for (const k in obj) {
    obj.hasOwnProperty(k) && a.push(k);
  }
  return a;
};

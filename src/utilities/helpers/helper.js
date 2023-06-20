export const capitalize = (label = "") => {
  var _label = label;
  return (
    _label.length &&
    _label
      .split(" ")
      .map((str) =>
        str
          .slice(0, 1)
          .toUpperCase()
          .concat(str.slice(1, str.length).toLocaleLowerCase())
      )
      .join(" ")
  );
};

export const compareObjs = (obj1 = {}, obj2 = {}) => {
  let _obj1 = JSON.stringify(obj1);
  let _obj2 = JSON.stringify(obj2);
  return _obj1 === _obj2;
};

export const makeID = (string = "") =>
  string
    .trim()
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/\//g, "_or_")
    .replace(/&/g, "_and_");

  export const makeLabel = (str = '') => {
return str.split("_").map(sub => capitalize(sub)).join(" ")
  }

export const unique = () =>
  `${parseInt(Math.random() * 1000000000000000)}`.replace(/0/g, "_x_");

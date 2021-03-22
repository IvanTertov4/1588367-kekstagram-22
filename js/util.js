const maxStringLenght = 140;

const measureString = function (yourString) {
  let allString = String(yourString);
  allString = allString.length;
  return (allString <= maxStringLenght);
};

const getRandomInt = function (firstValue, secondValue) {
  const minValue = Math.min(firstValue, secondValue);
  const maxValue = Math.max(firstValue, secondValue);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

const isEscEvent = function (evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
};


export {measureString, getRandomInt, isEscEvent };

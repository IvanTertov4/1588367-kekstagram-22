let maxStringLenght = 140;

const measureString = function (yourString) {
  let allString = String(yourString);
  allString = allString.length;
  return (allString <= maxStringLenght);
};

measureString('1235678901234567890');

const getRandomInt = function (firstValue, secondValue) {
  const minValue = Math.min(firstValue, secondValue);
  const maxValue = Math.max(firstValue, secondValue);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

getRandomInt(90, 17)

export {measureString, getRandomInt};


const measureString = function (yourString, maxStringValue) {
  let allString = String(yourString);
  allString = allString.length
  console.log ('Длина строки: ' + allString);
  if (allString > maxStringValue) {
    console.log('error');
  };
};

measureString('12345678901234567890', 140);


const getRandomInt = function (minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

getRandomInt(5, 10)

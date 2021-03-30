const measureString = function (yourString, maxLenght) {
  let allString = String(yourString);
  allString = allString.length;
  return (allString <= maxLenght);
};

const getRandomInt = function (firstValue, secondValue) {
  const minValue = Math.min(firstValue, secondValue);
  const maxValue = Math.max(firstValue, secondValue);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

const hashtagCheck = function (inputStr) {
  if (inputStr.length === 0) {
    return true
  }
  let strParts = inputStr.split(' ').map((item) => item.toLowerCase());
  if (strParts.length  > 5) {
    return false
  }
  let validationResult = true;
  strParts.forEach((item) => {
    if (!validationResult) {
      return
    }
    if (item.length > 20) {
      validationResult = false
    } else validationResult = /^#[a-z0-9а-я-яё]+$/.test(item);
  });
  if (!validationResult) {
    return false
  }
  strParts.sort();
  for (let i = 0; i < strParts.length - 1; i++) {
    if (strParts[i] === strParts[i+1]) {
      return false
    }
  }
  return true;
}

export {measureString, getRandomInt, hashtagCheck};


const enlargeValueButton = document.querySelector('.scale__control--bigger');
const reduceValueButton = document.querySelector('.scale__control--smaller');
const changingPicture = document.querySelector('.img-upload__preview').children[0];
let inputControlValue = document.querySelector('.scale__control--value');
const maxValue = 100;
const minValue = 0;


const checkInputValue = function (checkingValue) {
  let outputValue = checkingValue;
  outputValue = Math.min(outputValue, maxValue);
  outputValue = Math.max(outputValue, minValue);
  return outputValue;
}

const editInputValue = function (editingValue, valueDelta) {
  let outputEditingValue = editingValue;
  if ((parseInt(editingValue) === 0) || (parseInt(editingValue) === 100)) {
    outputEditingValue = editingValue;
  } else {
    outputEditingValue = checkInputValue(editingValue) + valueDelta;
  }
  return outputEditingValue;
}

inputControlValue.value = 100;

reduceValueButton.addEventListener('click', function () {
  inputControlValue.value = editInputValue(inputControlValue.value, -25);
  console.log(inputControlValue.value);
  return inputControlValue.value;
});

enlargeValueButton.addEventListener('click', function () {
  inputControlValue.value = editInputValue(inputControlValue.value, 25);
  console.log(inputControlValue.value);
});

console.log( editInputValue('0', 25))


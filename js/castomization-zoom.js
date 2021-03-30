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
  if ((editingValue <= 0) && (editingValue > 100)) {
    valueDelta = 0
  }
  let outputEditingValue = editingValue + valueDelta;
  return outputEditingValue;
}

inputControlValue.value = 100;

reduceValueButton.addEventListener('click', function () {
  inputControlValue.value = editInputValue(checkInputValue(parseInt(inputControlValue.value)), -25);
  doZoom(inputControlValue.value);
});

enlargeValueButton.addEventListener('click', function () {
  inputControlValue.value = editInputValue(checkInputValue(parseInt(inputControlValue.value)), 25);
  doZoom(inputControlValue.value);
});

const doZoom = function (zoomValue) {
  let workingValue = zoomValue / 100;
  changingPicture.style.transform = `scale(${workingValue})`;
}



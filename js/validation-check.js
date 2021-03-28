import {measureString, hashtagCheck} from  './util.js';
const inputHashtage = document.querySelector('.text__hashtags');
const inputTextArea = document.querySelector('.text__description');

const checkHashtage = function () {
  const result = hashtagCheck(inputHashtage.value);
  if (result) inputHashtage.style.border = 'none';
  else inputHashtage.style.border = '3px solid red';
  return result
}

const checkTextArea = function () {
  const result = measureString(inputTextArea.value, 140);
  if (result) inputTextArea.style.border = 'none';
  else inputTextArea.style.border = '3px solid red';
  return result
}


const inputChecking = function () {
  let resultChecking =  true;
  resultChecking = checkHashtage() && resultChecking;
  resultChecking = checkTextArea() && resultChecking;
  return resultChecking;
};

export {inputChecking}



import {postData} from './server-cooperation.js';
import {inputChecking} from './validation-check.js'
import {doErrorMessage, doSuccessMessage} from './results-info.js'

const uploadField = document.getElementById('upload-file');
const closeButton = document.getElementById('upload-cancel');
const sendFormButton = document.querySelector('.img-upload__submit');


const uploadListener = function () {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeListener = function () {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const keyListenerClose = function (evt) {
  if (document.activeElement === document.querySelector('.text__hashtags')) {
    return
  }
  if (document.activeElement === document.querySelector('.text__description')) {
    return
  }
  if (evt.keyCode === 27) {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const afterSending = function () {
  document.querySelector('.scale__control--value').value = '100' + '%';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

const sendingForm = function () {
  const form = document.getElementById('upload-select-image')
  if (inputChecking()) {
    postData(form).then(ok => { if (ok) {afterSending(); doSuccessMessage()} else{doErrorMessage()}}).catch(doErrorMessage)
  }
}

uploadField.addEventListener('change', uploadListener);
closeButton.addEventListener('click', closeListener);
document.addEventListener('keydown', keyListenerClose);
sendFormButton.addEventListener('click', sendingForm)



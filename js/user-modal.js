const bigPictureMode = document.querySelector('.big-picture');
const closeButtonBPMode = document.querySelector('.big-picture__cancel');
const openButtonBPMode = document.querySelector('.picture');
const listenerOpen = function (evt) {
  evt.preventDefault();
  bigPictureMode.classList.remove('hidden');

};
const listenerClose = function (evt) {
  evt.preventDefault();
  bigPictureMode.classList.add('hidden');

};
const keyListenerClose = function (evt) {
  if (evt.keyCode === 27) {
    bigPictureMode.classList.add('hidden');
  }

};

openButtonBPMode.addEventListener('click', listenerOpen);

closeButtonBPMode.addEventListener('click', listenerClose);

document.addEventListener('keydown', keyListenerClose);


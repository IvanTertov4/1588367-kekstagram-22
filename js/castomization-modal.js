const uploadField = document.getElementById('upload-file');
const closeButton = document.getElementById('upload-cancel');

const uploadListener = function () {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeListener = function () {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const keyListenerClose = function (evt) {
  if (evt.keyCode === 27) {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
  }

};

uploadField.addEventListener('change', uploadListener);
closeButton.addEventListener('click', closeListener);
document.addEventListener('keydown', keyListenerClose);


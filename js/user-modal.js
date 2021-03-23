const bigPictureMode = document.querySelector('.big-picture');
const closeButtonBPMode = document.querySelector('.big-picture__cancel');
const openButtonBPMode = document.querySelector('.picture');

openButtonBPMode.addEventListener('click', function(evt){
  evt.preventDefault();
  bigPictureMode.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      bigPictureMode.classList.add('hidden');
    }
  });
})

closeButtonBPMode.addEventListener('click', function (evt) {
  evt.preventDefault();
  bigPictureMode.classList.add('hidden');
})

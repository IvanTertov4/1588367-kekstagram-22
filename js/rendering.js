const bigPictureMode = document.querySelector('.big-picture');
const closeButtonBPMode = document.querySelector('.big-picture__cancel');
const bigPictureModeImg = document.querySelector('.big-picture__img').children[0];
const bigPictureModeLikes = document.querySelector('.likes-count');

const closeBPMode = function() {
  bigPictureMode.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const listenerClose = function (evt) {
  evt.preventDefault();
  closeBPMode();
};
const keyListenerClose = function (evt) {
  if (evt.keyCode === 27) closeBPMode();
};

closeButtonBPMode.addEventListener('click', listenerClose);
document.addEventListener('keydown', keyListenerClose);


const renderPictures = function(inputingData) {

  const picturesWindow = document.querySelector('.pictures');
  const pictureTemplate =  document.querySelector('#picture').content.querySelector('.picture');
  const similarListFragment = document.createDocumentFragment();

  inputingData.forEach(({url, comments, likes}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContext = `${likes}`;
    similarListFragment.appendChild(pictureElement);
    const listenerOpen = function (evt) {
      evt.preventDefault();
      bigPictureMode.classList.remove('hidden');
      document.body.classList.add('modal-open');
      bigPictureModeImg.src = url;
      bigPictureModeLikes.textContent = `${likes}`;
      let commentsList = document.querySelector('.social__comments');
      while (commentsList.firstChild) {
        commentsList.removeChild(commentsList.firstChild)
      }

      document.querySelector('.comments-loader').classList.remove('hidden')
      let count = 0
      document.querySelector('.comments-count').textContent = comments.length
      const doComments = function () {
        let maxcount = Math.min(count + 5,comments.length);
        while (count < maxcount) {
          const newCommentAvatar = document.createElement('img')
          newCommentAvatar.classList.add('social__picture')
          newCommentAvatar.src = comments[count].avatar
          newCommentAvatar.alt = comments[count].name
          const newCommentLi = document.createElement('li')
          newCommentLi.classList.add('social__comment')
          const newComment = document.createElement('p')
          newComment.textContent = comments[count].message
          newCommentLi.appendChild(newCommentAvatar)
          newCommentLi.appendChild(newComment)
          document.querySelector('.social__comments').append(newCommentLi)
          count++;
        }
        if (count === comments.length) document.querySelector('.comments-loader').classList.add('hidden')
      }
      document.querySelector('.comments-loader').addEventListener('click', doComments);
      doComments()
    };

    pictureElement.addEventListener('click', listenerOpen);

  });
  picturesWindow.appendChild(similarListFragment);
}

const renderError = function (errorString) {
  const errorDiv = document.createElement('div');
  errorDiv.style.backgroundColor = 'red';
  errorDiv.style.display = 'flex';
  errorDiv.style.justifyContent = 'center';
  errorDiv.style.alignItems = 'center';
  let errorMessage = document.createElement('p');
  errorMessage.textContent = errorString;
  errorDiv.append(errorMessage);
  document.body.before(errorDiv);
}



export {renderPictures, renderError};



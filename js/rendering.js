import {createUserPicture, COMMENTS} from './data.js';

const picturesWindow = document.querySelector('.pictures');

const pictureTemplate =  document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = createUserPicture(COMMENTS);

const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(({url, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContext = likes;
  similarListFragment.appendChild(pictureElement);
});

picturesWindow.appendChild(similarListFragment);

export {similarPictures};


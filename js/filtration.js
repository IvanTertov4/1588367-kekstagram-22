import { renderPictures } from './rendering.js';
import {getDefault, getRandom, getSortedComments} from './data-working.js';

const renderFilter = function () {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  const picturesWindow = document.querySelector('.pictures');
  const buttonDefault = document.getElementById('filter-default');
  const buttonRandom = document.getElementById('filter-random');
  const buttonDiscussed = document.getElementById('filter-discussed');

  const doDefault = function () {
    if (buttonRandom.classList.contains('img-filters__button--active')) buttonRandom.classList.remove('img-filters__button--active');
    if (buttonDiscussed.classList.contains('img-filters__button--active')) buttonDiscussed.classList.remove('img-filters__button--active');
    buttonDefault.classList.add('img-filters__button--active');
    while (picturesWindow.children.length > 2) picturesWindow.removeChild(picturesWindow.lastChild);
    renderPictures(getDefault());
  }

  const doRandom = function () {
    if (buttonDefault.classList.contains('img-filters__button--active')) buttonDefault.classList.remove('img-filters__button--active');
    if (buttonDiscussed.classList.contains('img-filters__button--active')) buttonDiscussed.classList.remove('img-filters__button--active');
    document.getElementById('filter-random').classList.add('img-filters__button--active');
    while (picturesWindow.children.length > 2) picturesWindow.removeChild(picturesWindow.lastChild);
    renderPictures(getRandom());
  }

  const doDiscussed = function () {
    if (buttonDefault.classList.contains('img-filters__button--active')) buttonDefault.classList.remove('img-filters__button--active');
    if (buttonRandom.classList.contains('img-filters__button--active')) buttonRandom.classList.remove('img-filters__button--active');
    document.getElementById('filter-discussed').classList.add('img-filters__button--active');
    while (picturesWindow.children.length > 2) picturesWindow.removeChild(picturesWindow.lastChild);
    renderPictures(getSortedComments());
  }

  buttonDefault.addEventListener('click', doDefault);
  buttonRandom.addEventListener('click', doRandom);
  buttonDiscussed.addEventListener('click', doDiscussed);
}

export {renderFilter}

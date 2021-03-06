import {setData} from './data-working.js';
import { renderFilter } from './filtration.js';
import {renderPictures, renderError} from './rendering.js';

async function getData() {
  try {
    const response = await fetch('https://22.javascript.pages.academy/kekstagram/data');
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Get data error: ${response.status}`)
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

async function postData(form) {
  try {
    let formData = new FormData(form);
    const response = await fetch('https://22.javascript.pages.academy/kekstagram', {method: 'POST', body: formData});
    return response.ok
  } catch (err) {
    throw new Error(err.message);
  }
}

getData().then(data => {setData(data); renderPictures(data); renderFilter()}).catch((err) => renderError(err.message))

export {postData}


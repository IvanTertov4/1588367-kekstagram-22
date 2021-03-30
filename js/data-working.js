import { getRandomInt } from './util.js';

let data = [];
const setData = function (dataFromFetch) {
  data = dataFromFetch;
}

const getDefault = function () {
  return data;
}

const getRandom = function () {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let g = getRandomInt(0,24);
    const item = data[g];
    if (!result.find((finded) => finded.id === item.id)) {
      result.push(item);
      if (result.length === 10) {
        return result;
      }
    }
  }
}

const getSortedComments = function () {
  let result = [];
  data.forEach(item => result.push(item))
  result.sort((a, b) => {
    if (a.comments.length > b.comments.length) {
      return 1;
    }
    if (a.comments.length < b.comments.length) {
      return -1;
    } else {
      return 0;
    }
  })
  return result;
}

export {setData, getDefault, getRandom, getSortedComments};




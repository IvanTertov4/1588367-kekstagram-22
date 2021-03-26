import {getRandomInt} from './util.js';

const DESCRIPTIONS = [
  'Отлично',
  'Замечательно',
  'Волшебно',
  'Удивительно',
  'Действительно великолепно',
  'Восхитительно',
  'Лучшее, что я видел!',
  'Как жить после увиденной красоты?',
  'Идеально',
  'Прекрасно',
];

const NAMES = [
  'Артём',
  'Коля',
  'Женя',
  'Кирилл',
  'Настя',
  'Аня',
  'Лиза',
  'Арина',
];

const MASSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];

const createComment = function (commentsAmount) {
  const COMMENTS = [];
  for (let i = 1; i <= commentsAmount; i++) {
    const userComment = {
      id: i,
      avatar: 'img/avatar-' + getRandomInt(1,6) + '.svg',
      message: MASSAGES[getRandomInt(1, MASSAGES.length - 1)],
      name: NAMES[getRandomInt(1, NAMES.length - 1)],
    }
    COMMENTS.push(userComment);
  }

  return COMMENTS;
};

const createUserPicture = function (commentsValue) {
  const USERSPICTURES = [];
  for (let i = 1; i <= 25; i++) {
    commentsValue = createComment(getRandomInt(1, 10));
    const userPicture = {
      id: i,
      url: 'photos/' + i + '.jpg',
      description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
      likes: getRandomInt(15,200),
      comments: commentsValue,
    }
    USERSPICTURES.push(userPicture);
  }

  return USERSPICTURES;
};

export {createUserPicture};

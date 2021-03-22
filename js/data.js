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

const createComment = function () {
  return {
    id: getRandomInt(0, 200),
    avatar: 'img/avatar-' + getRandomInt(1,6) + '.svg',
    message: MASSAGES[getRandomInt(0, MASSAGES.length - 1)],
    name: NAMES[getRandomInt(0, NAMES.length - 1)],
  };
};

const COMMENTS = new Array(1).fill(null).map(() => createComment());

const createUserPicture = function (commentsValue) {
  const USERSPICTURES = [];
  for (let i = 1; i <= 25; i++) {
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

export {createUserPicture, COMMENTS};

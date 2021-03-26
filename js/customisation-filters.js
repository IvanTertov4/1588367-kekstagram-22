const FILTERS = {
  'effect-chrome': {id: 'effect-chrome', func: 'grayscale', suf: '', range: {min: 0, max: 1}, step: 0.1},
  'effect-sepia': {id: 'effect-sepia', func: 'sepia', suf: '', range: {min: 0, max: 1}, step: 0.1},
  'effect-marvin': {id: 'effect-marvin', func: 'invert', suf: '%', range: {min: 0, max: 100}, step: 1},
  'effect-phobos': {id: 'effect-phobos', func: 'blur', suf: 'px', range: {min: 0, max: 3}, step: 0.1},
  'effect-heat': {id: 'effect-heat', func: 'brightness', suf: '', range: {min: 1, max: 3}, step: 0.1},
  'effect-none': {id: 'effect-none', func: '', suf: '', range: {min: 0, max: 0}, step: 0},
};

let currentId = 'effect-none';

const sliderElement  = document.querySelector('.effect-level__slider');
const changingPicture = document.querySelector('.img-upload__preview').children[0];
const valueElement = document.querySelector('.effect-level__value');

const handler = (id) => {
  if (currentId !== 'effect-none') {
    sliderElement.noUiSlider.off();
    sliderElement.noUiSlider.destroy();
    changingPicture.style.removeProperty('filter');
  }
  currentId = id;
  document.getElementById(currentId).checked = true;
  if (currentId === 'effect-none') return;
  const filter = FILTERS[currentId];
  noUiSlider.create(sliderElement, {
    range: filter.range,
    start: filter.range.min,
    step: filter.step,
    connect: 'lower',
    format: {
      to: function (value) {
          if (Number.isInteger(value)) {
              return value.toFixed(0);
          }
          return value.toFixed(1);
      },
      from: function (value) {
          return parseFloat(value);
      },
    },
  });
  changingPicture.style.filter = `${filter.func}(${filter.range.min}${filter.suf})`;
  sliderElement.noUiSlider.on('update', (values, handle) => {
    valueElement.value = values[handle];
    changingPicture.style.filter = `${filter.func}(${valueElement.value}${filter.suf})`;
  });
};

for (let key in FILTERS) {
  const filter = FILTERS[key];
  const changeHandler = () => handler(filter.id);
  document.getElementById(key).addEventListener('change', changeHandler);
}



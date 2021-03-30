const doErrorMessage = function () {
  const errorTempleteInfo = document.querySelector('#error').content.querySelector('.error')
  let similarErrorInfo = document.createDocumentFragment();
  similarErrorInfo = errorTempleteInfo.cloneNode(true);

  document.body.children[0].appendChild(similarErrorInfo);

  similarErrorInfo.addEventListener('click', () => {
    document.body.children[0].removeChild( document.body.children[0].lastChild)
  })

  const errorButton = similarErrorInfo.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    document.body.children[0].removeChild( document.body.children[0].lastChild)
  })

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      document.body.children[0].removeChild( document.body.children[0].lastChild)
    }
  })
}



const doSuccessMessage = function () {
  const successTempleteInfo = document.querySelector('#success').content.querySelector('.success')
  let similarSuccessInfo = document.createDocumentFragment();
  similarSuccessInfo = successTempleteInfo.cloneNode(true);

  document.body.children[0].appendChild(similarSuccessInfo);

  similarSuccessInfo.addEventListener('click', () => {
    document.body.children[0].removeChild( document.body.children[0].lastChild)
  })

  const successButton = similarSuccessInfo.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    document.body.children[0].removeChild( document.body.children[0].lastChild)
  })

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      document.body.children[0].removeChild(document.body.children[0].lastChild)
    }
  })
}

export {doErrorMessage, doSuccessMessage};


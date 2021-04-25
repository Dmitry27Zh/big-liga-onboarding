const loaderElement = document.querySelector('.loader');
const contentElement = document.querySelector('.content');
const CONTENT_TOGGLING_DURATION = 800;
let isContentToggling = false;

const initContent = () => {
  loaderElement.classList.add('loader--init');

  if (document.documentElement.offsetWidth >= 1024) {
    document.removeEventListener('keydown', documentKeydownHandler);
    contentElement.classList.add('content--init');
    return;
  }

  document.removeEventListener('click', documentFirstClickHandler);
  contentElement.classList.add('content--init-first');

  document.addEventListener('click', (evt) => {
    if (!evt.target.matches('.loader__logo-icon *') && !isContentToggling) {
      isContentToggling = true;
      contentElement.classList.toggle('content--init-second');
      setTimeout(() => {
        isContentToggling = false;
      }, CONTENT_TOGGLING_DURATION);
    }
  });
};

const documentKeydownHandler = (evt) => {
  if (evt.key === 'Enter') {
    initContent();
  }
};

const documentFirstClickHandler = (evt) => {
  evt.preventDefault();

  if (!evt.target.matches('.loader__logo-icon *')) {
    initContent();
  }
};

const initLoader = () => {
  window.addEventListener('load', () => {
    loaderElement.classList.add('loader--preload');

    if (document.documentElement.offsetWidth >= 1024) {
      document.addEventListener('keydown', documentKeydownHandler);
      return;
    }

    document.addEventListener('click', documentFirstClickHandler);
  });
};

export {initLoader};


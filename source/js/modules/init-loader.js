const loaderElement = document.querySelector('.loader');
const contentElement = document.querySelector('.content');
const CONTENT_TOGGLING_DURATION = 800;
let isContentToggling = false;

const initContent = () => {
  loaderElement.classList.add('loader--init');
  contentElement.classList.add('content--init');

  if (document.documentElement.offsetWidth >= 1024) {
    document.removeEventListener('keydown', documentKeydownHandler);
    return;
  }

  document.removeEventListener('click', documentFirstClickHandler);

  document.addEventListener('click', documentNextClickHandler);
};

const documentKeydownHandler = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Enter') {
    initContent();
  }
};

const documentFirstClickHandler = (evt) => {
  evt.preventDefault();

  if (!evt.target.closest('.loader__logo')) {
    initContent();
  }
};

const documentNextClickHandler = (evt) => {
  if (!evt.target.closest('.loader__logo') && !isContentToggling) {
    isContentToggling = true;
    contentElement.classList.toggle('content--page-2');
    setTimeout(() => {
      isContentToggling = false;
    }, CONTENT_TOGGLING_DURATION);
  }
};

const addClickHandler = () => {
  if (contentElement.classList.contains('content--init')) {
    document.addEventListener('click', documentNextClickHandler);
  } else {
    document.addEventListener('click', documentFirstClickHandler);
  }
};

const removeClickHandlers = () => {
  document.removeEventListener('click', documentNextClickHandler);
  document.removeEventListener('click', documentFirstClickHandler);
};

const setupEventListeners = () => {
  if (document.documentElement.offsetWidth < 1024) {
    addClickHandler();
    document.removeEventListener('keydown', documentKeydownHandler);
  } else {
    removeClickHandlers();
    document.addEventListener('keydown', documentKeydownHandler);
  }
};

const breakpointDesktop = window.matchMedia('(min-width: 1024px)');

breakpointDesktop.addListener(setupEventListeners);

const initLoader = () => {
  window.addEventListener('load', () => {
    loaderElement.classList.add('loader--preload');
    setupEventListeners();

    window.addEventListener('resize', () => {
      contentElement.classList.add('content--resize');
      setTimeout(() => {
        contentElement.classList.remove('content--resize');
      }, 400);
    });
  });
};

export {initLoader};

import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

const loaderElement = document.querySelector('.loader');
const contentElement = document.querySelector('.content');

window.addEventListener('load', () => {
  loaderElement.classList.add('loader--preload');
  setTimeout(() => {
    loaderElement.classList.add('loader--init');
    contentElement.classList.add('content--init');
  }, 5000);
});

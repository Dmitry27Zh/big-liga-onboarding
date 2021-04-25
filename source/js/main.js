import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initLoader} from './modules/init-loader';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initLoader();


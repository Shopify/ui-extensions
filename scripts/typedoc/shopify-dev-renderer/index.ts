import {Paths} from '../types';

import {gettingStarted} from './getting-started';
import {extensionPoints} from './extension-points';
import {components} from './components';

export {extensionPoints, components, gettingStarted};

export function renderForShopifyDev(paths: Paths) {
  extensionPoints(paths);
  components(paths);
  gettingStarted(paths);
}
import {Paths} from '../types';

import {gettingStarted} from './getting-started';
import {extensionPoints} from './extension-points';
import {components} from './components';
import type {Content} from './components';

export {extensionPoints, components, gettingStarted};

export function renderForShopifyDev(paths: Paths, content: Content) {
  extensionPoints(paths);
  components(paths, content);
  gettingStarted(paths);
}
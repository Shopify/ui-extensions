import {createExtensionRegistrationFunction} from '../../extension';

import type {ExtensionTargets} from './extension-targets';

export const extension =
  createExtensionRegistrationFunction<ExtensionTargets>();
export const extend = extension;

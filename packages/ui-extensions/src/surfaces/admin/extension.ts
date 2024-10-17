import {createExtensionRegistrationFunction} from '../../utilities/remoteDomRegistration';

import type {ExtensionTargets} from './extension-targets';

export type {
  RenderExtension,
  ExtensionRegistrationFunctionWithRoot,
} from '../../utilities/remoteDomRegistration';

export const extension =
  createExtensionRegistrationFunction<ExtensionTargets>();
export const extend = extension;

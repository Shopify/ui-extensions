import {createExtensionRegistrationFunction} from './registration';

import type {ExtensionTargets} from './extension-targets';

export type {
  RenderExtension,
  ExtensionRegistrationFunctionWithRoot,
} from './registration';

export const extension =
  createExtensionRegistrationFunction<ExtensionTargets>();
export const extend = extension;

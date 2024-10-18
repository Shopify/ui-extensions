import {createExtensionRegistrationFunction} from '../../utilities/registration';

import type {ExtensionTargets} from './extension-targets';

export * from '../../extension';

export const dataExtension =
  createExtensionRegistrationFunction<ExtensionTargets>();

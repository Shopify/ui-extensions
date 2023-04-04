import {createExtensionRegistrationFunction} from '../../utilities/registration';

import type {ExtensionPoints} from './extension-points';

export * from '../../extension';

export const extension = createExtensionRegistrationFunction<ExtensionPoints>();
export const extend = extension;

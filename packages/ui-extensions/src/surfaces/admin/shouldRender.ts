import {createDataRegistrationFunction} from '../../utilities/dataRegistration';

import type {ExtensionTargets} from './should-render-targets';

export const shouldRender = createDataRegistrationFunction<ExtensionTargets>();

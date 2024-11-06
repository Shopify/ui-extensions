import {createShouldRenderRegistrationFunction} from '../../utilities/shouldRenderRegistration';

import type {ExtensionTargets} from './should-render-targets';

export const shouldRender =
  createShouldRenderRegistrationFunction<ExtensionTargets>();

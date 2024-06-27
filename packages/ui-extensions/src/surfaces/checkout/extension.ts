import {createExtensionRegistrationFunction} from '../../utilities/registration';

import type {ExtensionTargets} from './targets';

export * from '../../extension';

const overrideMapping = new Map<string, string>([['ui-box', 'View']]);

export const extension = createExtensionRegistrationFunction<ExtensionTargets>({
  overrideMapping,
});

/**
 * Registers your UI Extension to run for the selected extension target.
 *
 * @param target The extension target you are registering for.
 *
 * @param implementation The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension.
 *
 * @deprecated This is deprecated, use `extension` instead.
 */
export const extend = extension;

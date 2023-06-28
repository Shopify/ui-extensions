import {createExtensionRegistrationFunction} from './unified/utilities/registration';
import type {ExtensionPoints} from './extension-points';

export * from './unified/extension';

/**
 * Registers your UI Extension to run for the selected extension point.
 *
 * @param target The extension point you are registering for.
 *
 * @param implementation The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension.
 */
export const extension = createExtensionRegistrationFunction<ExtensionPoints>();

/**
 * Registers your UI Extension to run for the selected extension point.
 *
 * @param target The extension point you are registering for.
 *
 * @param implementation The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension.
 */
export const extend = extension;

import type {RemoteRoot, RemoteComponentType} from '@remote-ui/core';

import {createExtensionRegistrationFunction} from '../../utilities/registration';

import type {ExtensionPoints} from './extension-points';

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

export interface RenderExtension<
  Api,
  AllowedComponents extends RemoteComponentType<
    string,
    any,
    any
  > = RemoteComponentType<any, any, any>,
> {
  (
    root: RemoteRoot<AllowedComponents, AllowedComponents>,
    api: Api,
  ): void | Promise<void>;
}

export interface ExtensionRegistrationFunction<ExtensionPoints> {
  <Target extends keyof ExtensionPoints>(
    target: Target,
    implementation: ExtensionPoints[Target],
  ): ExtensionPoints[Target];
}

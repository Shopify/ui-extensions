import type {RenderExtensionTarget} from '../extension-targets';
import type {SessionToken} from '../api';

import {useApi} from './api';
import {ExtensionHasNoFieldError} from './errors';

/**
 * Provides access to session tokens, which can be used to verify token claims on your app's server.
 */
export function useSessionToken<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): SessionToken {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('sessionToken' in api)) {
    throw new ExtensionHasNoFieldError('sessionToken', extensionTarget);
  }

  return api.sessionToken;
}

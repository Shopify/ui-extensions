import { useContext } from 'react';
import { CheckoutUIExtensionError } from '../errors';
import { ExtensionApiContext } from '../context';
/**
 * Gives you access to the full API object that was passed in to your
 * extension when it was created.
 */

export function useExtensionApi() {
  var api = useContext(ExtensionApiContext);

  if (api == null) {
    throw new CheckoutUIExtensionError('You can only call this hook when running as a UI extension.');
  }

  return api;
}
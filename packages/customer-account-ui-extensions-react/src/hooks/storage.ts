import {useApi} from './api';
import {
  RenderExtensionPoint,
  Storage,
} from '@shopify/customer-account-ui-extensions';

/**
 * Returns the key-value `Storage` interface for the extension point.
 */
export function useStorage<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Storage {
  const api = useApi<ID>();

  return api.storage;
}

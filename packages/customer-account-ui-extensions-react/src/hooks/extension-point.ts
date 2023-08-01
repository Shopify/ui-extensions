import {
  RenderExtensionPoint,
  ExtensionPoint,
} from '@shopify/customer-account-ui-extensions';
import {useApi} from './api';

// Returns the extension point that the current extension is being rendered for.
export function useExtensionPoint<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): ExtensionPoint {
  const api = useApi<ID>();

  return api.extensionPoint;
}

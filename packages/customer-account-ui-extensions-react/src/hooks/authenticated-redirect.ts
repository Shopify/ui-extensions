import {
  RenderExtensionPoint,
  StandardApi,
} from '@shopify/customer-account-ui-extensions';

import {useApi} from './api';

// Returns authenticated redirect api utilities for the extension point.
export function useAuthenticatedRedirect<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): StandardApi['authenticatedRedirect'] {
  return useApi<ID>().authenticatedRedirect;
}

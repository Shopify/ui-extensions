import {
  RenderExtensionPoint,
  StandardApi,
} from '@shopify/customer-account-ui-extensions';
import {useApi} from './api';

// Returns customer api utilities for the extension point.
export function useCustomerApi<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): StandardApi['customerApi'] {
  return useApi<ID>().customerApi;
}

import {
  RenderExtensionPoint,
  Extension,
} from '@shopify/customer-account-ui-extensions';
import {useApi} from './api';

// Returns the metadata about the extension.
export function useExtensionData<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Extension {
  return useApi<ID>().extension;
}

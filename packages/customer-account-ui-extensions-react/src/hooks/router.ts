import {
  RenderExtensionPoint,
  StandardApi,
} from '@shopify/customer-account-ui-extensions';

import {useApi} from './api';

// Returns the router utilities for the extension point.
export function useRouter<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): StandardApi['router'] {
  return useApi<ID>().router;
}

// Returns navigate function for the router
export function useNavigate() {
  return useRouter().navigate;
}

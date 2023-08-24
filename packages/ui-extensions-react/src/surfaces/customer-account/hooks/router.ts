import {
  RenderCustomerAccountExtensionTarget,
  StandardApi,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';

// Returns the router utilities for the extension point.
export function useRouter<
  Target extends RenderCustomerAccountExtensionTarget = RenderCustomerAccountExtensionTarget,
>(): StandardApi['router'] {
  return useApi<Target>().router;
}

// Returns navigate function for the router
export function useNavigate(): StandardApi['router']['navigate'] {
  return useRouter().navigate;
}

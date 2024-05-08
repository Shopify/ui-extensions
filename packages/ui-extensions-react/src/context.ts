import {createContext} from 'react';
import type {
  ApiForRenderExtension as ApiForRenderExtensionCheckout,
  RenderExtensionTarget as ApiForExtensionCheckout,
} from '@shopify/ui-extensions/checkout';

import type {
  ApiForRenderExtension as ApiForRenderExtensionCustomerAccount,
  RenderExtensionTarget as ApiForExtensionCustomerAccount,
} from '@shopify/ui-extensions/customer-account';

export const ExtensionApiContext = createContext<
  | ApiForRenderExtensionCheckout<ApiForExtensionCheckout>
  | ApiForRenderExtensionCustomerAccount<ApiForExtensionCustomerAccount>
  | null
>(null);

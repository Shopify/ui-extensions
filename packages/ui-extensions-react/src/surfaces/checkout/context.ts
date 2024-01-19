import {createContext} from 'react';
import type {
  ApiForRenderExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import type {
  ApiForRenderExtension as CustomerAccountApiForRenderExtension,
  RenderExtensionTarget as CustomerAccountRenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

export const ExtensionApiContext = createContext<
  | ApiForRenderExtension<RenderExtensionTarget>
  | CustomerAccountApiForRenderExtension<CustomerAccountRenderExtensionTarget>
  | null
>(null);

import {createContext} from 'react';

import {
  InputForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/argo-checkout';

export const ExtensionInputContext = createContext<InputForRenderExtension<
  RenderExtensionPoint
> | null>(null);

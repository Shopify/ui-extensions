import {createContext} from 'react';

import {
  InputForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/argo-post-purchase';

export const ExtensionInputContext = createContext<InputForRenderExtension<
  RenderExtensionPoint
> | null>(null);

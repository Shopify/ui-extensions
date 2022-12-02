import {createContext} from 'react';

import {
  InputForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/post-purchase-ui-extensions';

export const ExtensionInputContext =
  createContext<InputForRenderExtension<RenderExtensionPoint> | null>(null);

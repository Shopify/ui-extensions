import {createContext} from 'react';
import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/argo-checkout';

export const ExtensionApiContext = createContext<ApiForRenderExtension<
  RenderExtensionPoint
> | null>(null);

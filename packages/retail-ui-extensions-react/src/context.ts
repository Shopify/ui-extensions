import {createContext} from 'react';
import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/retail-ui-extensions';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionPoint> | null>(null);
import {createContext} from 'react';
import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/pos-ui-extensions';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionPoint> | null>(null);

import {createContext} from 'react';
import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/retail-ui-extensions/src';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionPoint> | null>(null);

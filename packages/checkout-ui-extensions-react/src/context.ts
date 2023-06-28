import {createContext} from 'react';
import type {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionPoint> | null>(null);

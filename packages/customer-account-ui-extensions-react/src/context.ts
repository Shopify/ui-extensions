import {createContext} from 'react';
import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/customer-account-ui-extensions';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionPoint> | null>(null);

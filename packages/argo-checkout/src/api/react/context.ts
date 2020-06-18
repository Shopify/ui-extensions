import {createContext} from 'react';

import {
  InputForRenderExtension,
  RenderExtensionPoint,
} from '../../extension-points';

export const ExtensionInputContext = createContext<InputForRenderExtension<
  RenderExtensionPoint
> | null>(null);

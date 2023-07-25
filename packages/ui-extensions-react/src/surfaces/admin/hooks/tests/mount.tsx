import React from 'react';
import {createMount} from '@quilted/react-testing';
import {
  ApiForRenderExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/admin';

import {ExtensionApiContext} from '../../context';

export const mount = createMount<Options, Options>({
  context(options) {
    return options;
  },

  render(element, {extensionApi}) {
    return (
      <ExtensionApiContext.Provider value={extensionApi as any}>
        {element}
      </ExtensionApiContext.Provider>
    );
  },
});

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PartialExtensionApi = DeepPartial<
  ApiForRenderExtension<RenderExtensionTarget>
>;

interface Options {
  extensionApi?: PartialExtensionApi;
}

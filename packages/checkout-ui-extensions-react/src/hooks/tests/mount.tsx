import React from 'react';
import {createMount} from '@quilted/react-testing';
import {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';
import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

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
  ApiForRenderExtension<RenderExtensionPoint>
>;

interface Options {
  extensionApi?: PartialExtensionApi;
}

export function createMockStatefulRemoteSubscribable<T>(
  value: T,
): StatefulRemoteSubscribable<T> {
  const subscribable: StatefulRemoteSubscribable<T> = {
    get current() {
      return value;
    },
    subscribe: jest.fn(),
    destroy: jest.fn(),
  };

  return subscribable;
}

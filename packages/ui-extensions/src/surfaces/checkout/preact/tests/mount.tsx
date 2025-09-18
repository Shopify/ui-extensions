import {createRender} from '@quilted/react-testing';
import type {SubscribableSignalLike} from '../../shared';

import type {
  ApiForExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

// eslint-disable-next-line no-warning-comments
// TODO: remove the context and change all tests to use a mock
// version of the shopify global API in beforeEach().
import {ExtensionApiContext} from '../../context';

export const mount = createRender<Options, Options>({
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
  ApiForExtension<RenderExtensionTarget>
>;

interface Options {
  extensionApi?: PartialExtensionApi;
}

export function createMockStatefulRemoteSubscribable<T>(
  value: T,
): SubscribableSignalLike<T> {
  const subscribable: SubscribableSignalLike<T> = {
    get current() {
      return value;
    },
    subscribe: jest.fn(),
    destroy: jest.fn(),
  };

  return subscribable;
}

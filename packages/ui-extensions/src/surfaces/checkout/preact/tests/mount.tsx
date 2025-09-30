import {createRender} from '@quilted/react-testing';
import type {SubscribableSignalLike} from '../../shared';
import type {ExtensionTargets} from '../../extension-targets';

import type {
  ApiForExtension,
  RenderExtensionTarget,
} from '../../extension-targets';
import type {Extension} from '../../api/standard/standard';

declare global {
  namespace NodeJS {
    interface Global {
      shopify: any;
    }
  }
}

export const mount = createRender<Options, Options>({
  context(options: Options) {
    return options;
  },

  render(element: any) {
    return element;
  },
});

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PartialExtensionApi = DeepPartial<
  ApiForExtension<RenderExtensionTarget>
>;

interface Options {}

export function createMockSubscribableSignalLike<T>(
  value: T,
): SubscribableSignalLike<T> {
  const subscribable: SubscribableSignalLike<T> = {
    get current() {
      return value;
    },
    get value() {
      return value;
    },
    subscribe: jest.fn(() => () => {}),
    destroy: jest.fn(),
  };

  return subscribable;
}

/**
 * Helper function to set up the global shopify mock with type safety
 * @param mockData Deep partial mock data for the API
 */
export function setupGlobalShopifyMock<
  Target extends RenderExtensionTarget = 'purchase.checkout.block.render',
>(mockData: DeepPartial<ExtensionTargets[Target]['api']>): void {
  const finalMockData = {
    extension: createMockExtension<Target>(
      'purchase.checkout.block.render' as Target,
    ),
    ...mockData,
  } as DeepPartial<ExtensionTargets[Target]['api']>;

  (globalThis as any).shopify = finalMockData;
}

/**
 * Helper function to tear down the global shopify mock
 * Call this in afterEach() to clean up the global shopify object and clear all mocks
 */
export function tearDownGlobalShopifyMock(): void {
  delete (globalThis as any).shopify;
  jest.clearAllMocks();
}

/**
 * Helper function to create a minimal extension object for testing
 */
export function createMockExtension<Target extends RenderExtensionTarget>(
  target: Target,
): Extension<Target> {
  return {
    target,
    apiVersion: '2023-07',
    capabilities: createMockSubscribableSignalLike([]),
    rendered: createMockSubscribableSignalLike(true),
    scriptUrl: 'https://example.com/script.js',
  };
}

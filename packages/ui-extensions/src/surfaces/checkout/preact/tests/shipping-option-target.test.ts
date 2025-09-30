import type {ExtensionTarget} from '../../extension-targets';
import type {ShippingOption} from '../../api/standard/standard';

import {useShippingOptionTarget} from '../shipping-option-target';
import {
  createMockSubscribableSignalLike,
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
  createMockExtension,
} from './mount';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

describe('useShippingOptionTarget', () => {
  afterEach(tearDownGlobalShopifyMock);
  const shippingOption: ShippingOption = {
    code: 'shipping_method_1',
    metafields: [],
    handle: 'shipping_method_1',
    title: 'Shipping method 1',
    description: 'something',
    type: 'shipping',
    carrier: {name: undefined},
    cost: {
      amount: 10,
      currencyCode: 'USD',
    },
    costAfterDiscounts: {
      amount: 10,
      currencyCode: 'USD',
    },
    deliveryEstimate: {
      timeInTransit: {
        lower: 10000,
        upper: 10000,
      },
    },
  };

  it('throws if extension target has no api.target', () => {
    const target: ExtensionTarget = 'purchase.checkout.block.render';
    setupGlobalShopifyMock({
      extension: createMockExtension(target),
    });

    expect(() => {
      mount.hook(() => useShippingOptionTarget());
    }).toThrow(
      expect.objectContaining({
        name: 'ExtensionHasNoTargetError',
      }),
    );
  });

  it('throws if extension target has no api.isTargetSelected', () => {
    const target =
      'purchase.checkout.shipping-option-item.render-after' as const;
    setupGlobalShopifyMock<typeof target>({
      extension: createMockExtension(target),
      target: createMockSubscribableSignalLike(shippingOption),
      renderMode: {overlay: false},
    });

    expect(() => {
      mount.hook(() => useShippingOptionTarget());
    }).toThrow(
      expect.objectContaining({
        name: 'ExtensionHasNoTargetError',
      }),
    );
  });

  it('returns the shipping option target if it exists', () => {
    const target =
      'purchase.checkout.shipping-option-item.render-after' as const;
    setupGlobalShopifyMock<typeof target>({
      extension: createMockExtension(target),
      target: createMockSubscribableSignalLike(shippingOption),
      isTargetSelected: createMockSubscribableSignalLike(true),
      renderMode: {overlay: false},
    });

    const {value} = mount.hook(() => useShippingOptionTarget());

    expect(value).toStrictEqual({
      shippingOptionTarget: shippingOption,
      isTargetSelected: true,
      renderMode: {overlay: false},
    });
  });
});

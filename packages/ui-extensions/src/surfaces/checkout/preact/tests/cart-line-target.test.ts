import type {CartLine} from '../../api/standard/standard';

import {useCartLineTarget} from '../cart-line-target';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');
import {
  createMockSubscribableSignalLike,
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
  createMockExtension,
} from './mount';

describe('useCartLineTarget', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('throws if extension target has no api.target', () => {
    setupGlobalShopifyMock({});

    expect(() => {
      mount.hook(() => useCartLineTarget());
    }).toThrow(
      expect.objectContaining({
        name: 'ExtensionHasNoTargetError',
      }),
    );
  });

  it('returns the cart line target if it exists', async () => {
    const line = {
      id: 'gid://shopify/CartLine/stable_id',
      quantity: 1,
      cost: {
        totalAmount: {
          amount: 10,
          currencyCode: 'USD',
        },
      },
      lineComponents: [],
      merchandise: {
        type: 'variant',
        id: 'product_variant_id',
        title: 'product title',
        requiresShipping: true,
        selectedOptions: [],
        product: {
          id: 'product id',
          vendor: 'product vendor',
          productType: 'product type',
        },
      },
      attributes: [],
      discountAllocations: [],
      parentRelationship: null,
    } as CartLine;

    const target = 'purchase.cart-line-item.line-components.render' as const;
    setupGlobalShopifyMock<typeof target>({
      target: createMockSubscribableSignalLike(line),
      extension: createMockExtension(target),
    });

    const {value} = mount.hook(() => useCartLineTarget());

    expect(value).toStrictEqual(line);
  });
});

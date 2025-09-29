import type {DeliveryGroup, ShippingOption} from '../../api/standard/standard';
// eslint-disable-next-line import-x/no-deprecated
import {useDeliveryGroupTarget} from '../delivery-group-target';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
  createMockExtension,
} from './mount';

describe('useDeliveryGroupTarget', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns the DeliveryGroup target if it exists', async () => {
    const deliveryGroup: DeliveryGroup = {
      selectedDeliveryOption: {
        handle: 'shipping_method_1',
      },
      groupType: 'oneTimePurchase',
      isDeliveryRequired: true,
      targetedCartLines: [
        {
          id: 'gid://shopify/CartLine/stable_id',
        },
      ],
      deliveryOptions: [
        {
          handle: 'shipping_method_1',
          title: 'Shipping method 1',
          description: undefined,
          type: 'shipping',
          carrier: {
            name: 'test carrier',
          },
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
        } as ShippingOption,
      ],
    };

    const deliveryGroup2: DeliveryGroup = {
      ...deliveryGroup,
      targetedCartLines: [
        {
          id: 'gid://shopify/CartLine/stable_id_2',
        },
      ],
    };

    const target =
      'purchase.checkout.shipping-option-list.render-before' as const;

    setupGlobalShopifyMock<typeof target>({
      extension: createMockExtension(target),
      target: createMockSubscribableSignalLike({
        groupType: 'oneTimePurchase',
        deliveryGroups: [deliveryGroup, deliveryGroup2],
      }),
    });

    // eslint-disable-next-line import-x/no-deprecated
    const {value} = mount.hook(() => useDeliveryGroupTarget());

    expect(value).toStrictEqual(deliveryGroup);
  });
});

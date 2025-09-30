import type {DeliveryGroup, ShippingOption} from '../../api/standard/standard';
import {useDeliveryGroupListTarget} from '../delivery-group-list-target';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
  createMockExtension,
} from './mount';

describe('useDeliveryGroupListTarget', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns the DeliveryGroupList target if it exists', async () => {
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

    const {value} = mount.hook(() => useDeliveryGroupListTarget());

    expect(value).toStrictEqual({
      groupType: 'oneTimePurchase',
      deliveryGroups: [deliveryGroup, deliveryGroup2],
    });
  });
});

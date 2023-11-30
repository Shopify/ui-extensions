import type {
  DeliveryGroup,
  ExtensionTarget,
  ShippingOption,
} from '@shopify/ui-extensions/checkout';

import {useDeliveryGroupTarget} from '../delivery-group-target';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useDeliveryGroupTarget', () => {
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

    const target: ExtensionTarget =
      'purchase.checkout.shipping-option-list.render-before';
    const {value} = mount.hook(() => useDeliveryGroupTarget(), {
      extensionApi: {
        extension: {target},
        target: createMockStatefulRemoteSubscribable(deliveryGroup),
      },
    });

    expect(value).toBe(deliveryGroup);
  });
});

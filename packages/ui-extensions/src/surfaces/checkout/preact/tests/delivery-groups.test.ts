import type {DeliveryGroup, ShippingOption} from '../../api/standard/standard';

import {useDeliveryGroups} from '../delivery-groups';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('Delivery Groups API hooks', () => {
  afterEach(tearDownGlobalShopifyMock);

  describe('useDeliveryGroups', () => {
    it('returns the current devliery groups', async () => {
      const deliveryGroups: DeliveryGroup[] = [
        {
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
        },
      ];

      setupGlobalShopifyMock({
        deliveryGroups: createMockSubscribableSignalLike(deliveryGroups),
      });

      const {value} = mount.hook(() => useDeliveryGroups());

      expect(value).toBe(deliveryGroups);
    });
  });
});

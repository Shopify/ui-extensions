import {faker} from '@faker-js/faker';

import {useDeliverySelectionGroups} from '../delivery-selection-groups';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
  createMockExtension,
} from './mount';

describe('useDeliverySelectionGroups', () => {
  afterEach(tearDownGlobalShopifyMock);
  it('returns deliverySelectionGroups if it exists', async () => {
    const deliverySelectionGroup = {
      handle: faker.string.uuid(),
      selected: false,
      title: 'Lowest price',
      associatedDeliveryOptions: [
        {handle: faker.string.uuid()},
        {handle: faker.string.uuid()},
      ],
      cost: {
        amount: 10,
        currencyCode: 'USD' as const,
      },
      costAfterDiscounts: {
        amount: 10,
        currencyCode: 'USD' as const,
      },
    };

    const target =
      'purchase.checkout.shipping-option-list.render-before' as const;

    setupGlobalShopifyMock<typeof target>({
      extension: createMockExtension(target),
      deliverySelectionGroups: createMockSubscribableSignalLike([
        deliverySelectionGroup,
      ]),
    });

    const {value} = mount.hook(() => useDeliverySelectionGroups());

    expect(value).toStrictEqual([deliverySelectionGroup]);
  });

  it('returns undefined if delivery selection groups are missing', async () => {
    const target =
      'purchase.checkout.shipping-option-list.render-before' as const;

    setupGlobalShopifyMock<typeof target>({
      extension: createMockExtension(target),
      deliverySelectionGroups: createMockSubscribableSignalLike(undefined),
    });

    const {value} = mount.hook(() => useDeliverySelectionGroups());

    expect(value).toBeUndefined();
  });
});

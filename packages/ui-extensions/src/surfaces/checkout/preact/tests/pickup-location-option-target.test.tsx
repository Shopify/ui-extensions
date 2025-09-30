import type {PickupLocationOption} from '../../api/standard/standard';
import type {ExtensionTarget} from '../../extension-targets';

import {usePickupLocationOptionTarget} from '../pickup-location-option-target';
import {
  createMockSubscribableSignalLike,
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
  createMockExtension,
} from './mount';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

describe('usePickupLocationOptionTarget', () => {
  afterEach(tearDownGlobalShopifyMock);
  const pickupLocationOption: PickupLocationOption = {
    handle: 'pickup_method_1',
    title: 'Pickup method 1',
    description: 'something',
    type: 'pickup',
    code: 'pickup_method_1',
    location: {
      address: {
        address1: '123 Fake St',
        address2: undefined,
        city: 'Ottawa',
        company: undefined,
        countryCode: 'CA',
        firstName: 'Bob',
        lastName: 'Bobsen',
        phone: '555-555-5555',
        provinceCode: 'ON',
        zip: 'K2P0V6',
      },
    },
    metafields: [],
  };

  it('throws if extension target has no api.target', () => {
    const target: ExtensionTarget = 'purchase.checkout.block.render';
    setupGlobalShopifyMock({
      extension: createMockExtension(target),
    });

    expect(() => {
      mount.hook(() => usePickupLocationOptionTarget());
    }).toThrow(
      expect.objectContaining({
        name: 'ExtensionHasNoTargetError',
      }),
    );
  });

  it('throws if extension target has no api.isTargetSelected', () => {
    const target =
      'purchase.checkout.pickup-location-option-item.render-after' as const;
    setupGlobalShopifyMock<typeof target>({
      extension: createMockExtension(target),
      target: createMockSubscribableSignalLike(pickupLocationOption),
    });

    expect(() => {
      mount.hook(() => usePickupLocationOptionTarget());
    }).toThrow(
      expect.objectContaining({
        name: 'ExtensionHasNoTargetError',
      }),
    );
  });

  it('returns the pickup location option target if it exists', () => {
    const target =
      'purchase.checkout.pickup-location-option-item.render-after' as const;
    setupGlobalShopifyMock<typeof target>({
      extension: createMockExtension(target),
      target: createMockSubscribableSignalLike(pickupLocationOption),
      isTargetSelected: createMockSubscribableSignalLike(true),
    });

    const {value} = mount.hook(() => usePickupLocationOptionTarget());

    expect(value).toStrictEqual({
      pickupLocationOptionTarget: pickupLocationOption,
      isTargetSelected: true,
    });
  });
});

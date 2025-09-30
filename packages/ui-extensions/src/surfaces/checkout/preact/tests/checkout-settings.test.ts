import type {CheckoutSettings} from '../../api/standard/standard';

import {useCheckoutSettings} from '../checkout-settings';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useCheckoutSettings', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns checkout settings from the api', () => {
    const checkoutSettings = {
      orderSubmission: 'ORDER',
      shippingAddress: {
        isEditable: true,
      },
      paymentTermsTemplate: undefined,
    } as CheckoutSettings;

    setupGlobalShopifyMock({
      checkoutSettings: createMockSubscribableSignalLike(checkoutSettings),
    });

    const {value} = mount.hook(() => useCheckoutSettings());

    expect(value).toStrictEqual(checkoutSettings);
  });
});

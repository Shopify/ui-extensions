import type {MailingAddress} from '../../api/shared';

import {useShippingAddress} from '../shipping-address';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useShippingAddress', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns latest shipping address', async () => {
    const address: MailingAddress = {countryCode: 'CA'};
    setupGlobalShopifyMock({
      shippingAddress: createMockSubscribableSignalLike(address),
    });

    const {value} = mount.hook(() => useShippingAddress());

    expect(value).toMatchObject(address);
  });
});

import type {MailingAddress} from '../../api/shared';

import {useBillingAddress} from '../billing-address';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useBillingAddress', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns latest billing address', async () => {
    const address: MailingAddress = {countryCode: 'CA'};
    setupGlobalShopifyMock({
      billingAddress: createMockSubscribableSignalLike(address),
    });

    const {value} = mount.hook(() => useBillingAddress());

    expect(value).toMatchObject(address);
  });
});

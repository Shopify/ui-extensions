import {MailingAddress} from '@shopify/ui-extensions/customer-account';

import {useBillingAddress} from '..';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useBillingAddress', () => {
  it('returns latest billing address', async () => {
    const address: MailingAddress = {countryCode: 'CA'};
    const extensionApi = {
      extension: {
        target: 'customer-account.order-status.block.render' as const,
      },
      billingAddress: createMockStatefulRemoteSubscribable(address),
    };

    const {value} = mount.hook(() => useBillingAddress(), {extensionApi});

    expect(value).toMatchObject(address);
  });
});

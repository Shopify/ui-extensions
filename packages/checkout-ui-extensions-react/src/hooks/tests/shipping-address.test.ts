import {Address} from '@shopify/checkout-ui-extensions';

import {useShippingAddress} from '../shipping-address';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useShippingAddress', () => {
  it('returns latest shipping address', async () => {
    const address: Address = {countryCode: 'CA'};
    const extensionApi = {
      shippingAddress: createMockStatefulRemoteSubscribable(address),
    };

    const {value} = mount.hook(() => useShippingAddress(), {extensionApi});

    expect(value).toMatchObject(address);
  });
});

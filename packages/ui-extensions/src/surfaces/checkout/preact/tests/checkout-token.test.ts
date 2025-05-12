import {useCheckoutToken} from '../checkout-token';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe.skip('useCheckoutToken', () => {
  it('returns checkoutToken from the api', () => {
    const checkoutToken = 'checkout-token';

    const {value} = mount.hook(() => useCheckoutToken(), {
      extensionApi: {
        checkoutToken: createMockStatefulRemoteSubscribable(checkoutToken),
      },
    });

    expect(value).toBe(checkoutToken);
  });
});

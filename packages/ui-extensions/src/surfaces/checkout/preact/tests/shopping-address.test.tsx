import {ScopeNotGrantedError} from '../../errors';
import {useShippingAddress} from '../shipping-address';

import {mount} from './mount';

describe.skip('useShippingAddress', () => {
  it('raises an exception without approval scopes granted', () => {
    expect(() =>
      mount.hook(() => useShippingAddress(), {
        extensionApi: {
          shippingAddress: undefined,
        },
      }),
    ).toThrow(ScopeNotGrantedError);
  });
});

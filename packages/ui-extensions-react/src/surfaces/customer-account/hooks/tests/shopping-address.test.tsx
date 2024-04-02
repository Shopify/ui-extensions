import {ScopeNotGrantedError} from '../../errors';
import {useShippingAddress} from '../shipping-address';

import {mount} from './mount';

describe('useShippingAddress', () => {
  it('raises an exception without approval scopes granted', () => {
    expect(() =>
      mount.hook(() => useShippingAddress(), {
        extensionApi: {
          extension: {
            target: 'customer-account.order-status.block.render' as const,
          },
          shippingAddress: undefined,
        },
      }),
    ).toThrow(ScopeNotGrantedError);
  });
});

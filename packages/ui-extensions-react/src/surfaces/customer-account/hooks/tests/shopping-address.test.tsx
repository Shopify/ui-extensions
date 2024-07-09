import {ScopeNotGrantedError} from '../../errors';
import {useShippingAddress} from '..';

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

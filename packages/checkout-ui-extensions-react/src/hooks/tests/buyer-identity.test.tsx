import {ScopeNotGrantedError} from '../../errors';
import {useCustomer} from '../buyer-identity';

import {mount} from './mount';

describe('useCustomer', () => {
  it('raises an exception without approval scopes granted', () => {
    expect(() =>
      mount.hook(() => useCustomer(), {
        extensionApi: {
          buyerIdentity: undefined,
        },
      }),
    ).toThrow(ScopeNotGrantedError);
  });
});

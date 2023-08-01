import {mount} from './mount';

import {useExtensionPoint} from '../extension-point';

describe('useExtensionPoint', () => {
  it('returns the extension point', () => {
    const mock = 'customer-account.dynamic.render';

    const {value} = mount.hook(() => useExtensionPoint(), {
      extensionApi: {
        extensionPoint: mock,
      },
    });

    expect(value).toStrictEqual(mock);
  });
});

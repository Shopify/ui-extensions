import {useExtensionLocale} from '../extension-locale';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useExtensionLocale', () => {
  it('returns extension locale from api', () => {
    const extensionLocale = 'en-CA';

    const {value} = mount.hook(() => useExtensionLocale(), {
      extensionApi: {
        i18n: {
          extensionLocale:
            createMockStatefulRemoteSubscribable(extensionLocale),
        },
      },
    });

    expect(value).toStrictEqual(extensionLocale);
  });
});

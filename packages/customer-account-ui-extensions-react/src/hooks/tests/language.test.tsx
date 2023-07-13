import {mount, createMockStatefulRemoteSubscribable} from './mount';

import {useLanguage} from '../language';

describe('useLanguage', () => {
  it('returns language from the api', () => {
    const language = {isoCode: 'en'};

    const {value} = mount.hook(() => useLanguage(), {
      extensionApi: {
        localization: {
          language: createMockStatefulRemoteSubscribable(language),
        },
      },
    });

    expect(value).toStrictEqual(language);
  });
});

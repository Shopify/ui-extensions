import {useFeatureEnabled, useFeatures} from '../features';

import {mount} from './mount';

describe('useFeatures', () => {
  it('returns a list of enabled shop features', () => {
    const features = ['test', 'test2'];

    const {value} = mount.hook(useFeatures, {
      extensionApi: {
        features,
      },
    });

    expect(value).toStrictEqual(features);
  });
});

describe('useExtensionCapability', () => {
  it('returns the status of a feature', () => {
    const features = ['test', 'test2'];

    const {value: enabledFeature} = mount.hook(
      () => useFeatureEnabled('test'),
      {
        extensionApi: {
          features,
        },
      },
    );

    const {value: disabledFeature} = mount.hook(
      () => useFeatureEnabled('test3'),
      {
        extensionApi: {
          features,
        },
      },
    );

    expect(enabledFeature).toBe(true);
    expect(disabledFeature).toBe(false);
  });
});

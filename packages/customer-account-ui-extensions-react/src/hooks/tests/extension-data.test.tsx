import {createMockStatefulRemoteSubscribable, mount} from './mount';
import {useExtensionData} from '../extension-data';
import {Extension} from '@shopify/customer-account-ui-extensions';

describe('useExtensionData', () => {
  it('returns the data of the extension', () => {
    const extension: Extension = {
      scriptUrl: 'test',
      rendered: createMockStatefulRemoteSubscribable(true),
      capabilities: createMockStatefulRemoteSubscribable([]),
    };

    const {value} = mount.hook(useExtensionData, {
      extensionApi: {
        extension,
      },
    });

    expect(value).toStrictEqual(extension);
  });
});

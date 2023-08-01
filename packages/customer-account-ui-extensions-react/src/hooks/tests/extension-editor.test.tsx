import {mount} from './mount';
import {useExtensionEditor} from '../extension-editor';

describe('useExtensionEditor', () => {
  it('returns extension editor from the api', () => {
    const {value} = mount.hook(() => useExtensionEditor(), {
      extensionApi: {
        extension: {
          editor: {type: 'checkout'},
        },
      },
    });

    expect(value).toMatchObject({type: 'checkout'});
  });
});

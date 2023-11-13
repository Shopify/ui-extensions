import {mount} from './mount';
import {useLiveFullPageNavigation} from '../live-navigation';
import {destroyAll} from '@quilted/react-testing';

describe('useLiveFullPageNavigation', () => {
  const mock = {
    navigate: jest.fn(),
    currentEntry: {state: jest.fn(), url: 'extension:/'},
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    updateCurrentEntry: jest.fn(),
  };

  it('returns the entry', () => {
    const {value} = mount.hook(useLiveFullPageNavigation, {
      extensionApi: {
        navigation: mock,
      },
    });

    expect(value).toStrictEqual(mock.currentEntry);
  });

  it('calls addEventListener', () => {
    mount.hook(useLiveFullPageNavigation, {
      extensionApi: {
        navigation: mock,
      },
    });

    expect(mock.addEventListener).toHaveBeenCalledWith(
      'currententrychange',
      expect.any(Function),
    );
  });

  it('calls removeEventListener on destroy', () => {
    mount.hook(useLiveFullPageNavigation, {
      extensionApi: {
        navigation: mock,
      },
    });

    destroyAll();

    expect(mock.removeEventListener).toHaveBeenCalledWith(
      'currententrychange',
      expect.any(Function),
    );
  });

  it('throws an error when its not a full page extension', async () => {
    const mock = {
      navigate: jest.fn(),
    };

    const runner = async () => {
      return mount.hook(useLiveFullPageNavigation, {
        extensionApi: {
          navigation: mock,
        },
      });
    };

    await expect(runner).rejects.toThrow(
      'useLiveFullPageNavigation must be used in a full page extension only',
    );
  });
});

import {mount} from './mount';
import {useNavigate, useRouter} from '../router';

describe('useRouter', () => {
  it('returns the router', () => {
    const mock = {
      navigate: jest.fn(),
      getExtensionFullPageUrl: jest.fn(),
    };

    const {value} = mount.hook(useRouter, {
      extensionApi: {
        router: mock,
      },
    });

    expect(value).toStrictEqual(mock);
  });
});

describe('useNavigate', () => {
  it('returns the navigate function', () => {
    const mock = jest.fn();
    const {value} = mount.hook(useNavigate, {
      extensionApi: {
        router: {
          navigate: mock,
        },
      },
    });

    expect(value).toStrictEqual(mock);
  });
});

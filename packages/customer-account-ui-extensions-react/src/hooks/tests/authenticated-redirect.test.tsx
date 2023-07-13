import {mount} from './mount';
import {useAuthenticatedRedirect} from '../authenticated-redirect';

describe('useAuthenticatedRedirect', () => {
  it('returns the authenticated redirect function', () => {
    const mock = {
      getStartUrl: jest.fn(),
    };
    const {value} = mount.hook(useAuthenticatedRedirect, {
      extensionApi: {
        authenticatedRedirect: mock,
      },
    });

    expect(value).toStrictEqual(mock);
  });
});

import {mount} from './mount';
import {useStorage} from '../storage';

describe('useStorage', () => {
  it('returns storage from the api', () => {
    const mockStorage = {
      read: jest.fn(),
      write: jest.fn(),
      delete: jest.fn(),
    };

    const {value} = mount.hook(() => useStorage(), {
      extensionApi: {
        storage: mockStorage,
      },
    });

    expect(value).toMatchObject(mockStorage);
  });
});

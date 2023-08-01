import {mount} from './mount';
import {useCustomerApi} from '../customer-api';

describe('useCustomerApi', () => {
  it('returns the customer api', () => {
    const mock = {
      getEndpoint: jest.fn(),
      getAccessToken: jest.fn(),
    };

    const {value} = mount.hook(useCustomerApi, {
      extensionApi: {
        customerApi: mock,
      },
    });

    expect(value).toStrictEqual(mock);
  });
});

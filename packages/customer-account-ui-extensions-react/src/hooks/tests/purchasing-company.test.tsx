import {createMockStatefulRemoteSubscribable, mount} from './mount';
import {usePurchasingCompany} from '../purchasing-company';

describe('usePurchasingCompany', () => {
  it('returns purchasing company from the api', () => {
    const mockPurchasingCompany = {
      company: {
        id: '1',
      },
    };
    const {value} = mount.hook(() => usePurchasingCompany(), {
      extensionApi: {
        buyerIdentity: {
          purchasingCompany: createMockStatefulRemoteSubscribable(
            mockPurchasingCompany,
          ),
        },
      },
    });

    expect(value).toStrictEqual(mockPurchasingCompany);
  });
});

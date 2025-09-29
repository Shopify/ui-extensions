import type {AppliedGiftCard} from '../../api/standard/standard';

import {useAppliedGiftCards} from '../gift-cards';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('Gift cards API hooks', () => {
  afterEach(tearDownGlobalShopifyMock);

  describe('useAppliedGiftCards', () => {
    it('returns the current gift cards', async () => {
      const giftCards: AppliedGiftCard[] = [
        {
          amountUsed: {amount: 20, currencyCode: 'USD'},
          balance: {amount: 20, currencyCode: 'USD'},
          lastCharacters: '1234',
        },
        {
          amountUsed: {amount: 10, currencyCode: 'USD'},
          balance: {amount: 10, currencyCode: 'USD'},
          lastCharacters: '5678',
        },
      ];

      setupGlobalShopifyMock({
        appliedGiftCards: createMockSubscribableSignalLike(giftCards),
      });

      const {value} = mount.hook(() => useAppliedGiftCards());

      expect(value).toBe(giftCards);
    });
  });
});

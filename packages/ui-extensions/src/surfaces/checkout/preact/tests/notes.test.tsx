import {useNote} from '../note';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useNote', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns the current order note', async () => {
    const note = 'the note';
    setupGlobalShopifyMock({
      note: createMockSubscribableSignalLike(note),
    });

    const {value} = mount.hook(() => useNote());

    expect(value).toBe(note);
  });
});

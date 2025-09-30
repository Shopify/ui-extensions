import {useAttributeValues, useAttributes} from '../attributes';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('Attributes API hooks', () => {
  afterEach(tearDownGlobalShopifyMock);

  describe('useAttributes', () => {
    it('returns an empty array if no attributes are available', () => {
      setupGlobalShopifyMock({
        attributes: createMockSubscribableSignalLike([]),
      });

      const {value} = mount.hook(() => useAttributes());

      expect(value).toStrictEqual([]);
    });

    it('returns an array of attributes if available', () => {
      setupGlobalShopifyMock({
        attributes: createMockSubscribableSignalLike([
          {key: 'foo', value: 'bar'},
        ]),
      });

      const {value} = mount.hook(() => useAttributes());

      expect(value).toStrictEqual([{key: 'foo', value: 'bar'}]);
    });
  });

  describe('useAttributeValues', () => {
    it('returns an array of attribute values if available', () => {
      setupGlobalShopifyMock({
        attributes: createMockSubscribableSignalLike([
          {key: 'foo', value: 'bar'},
        ]),
      });

      const {value} = mount.hook(() => useAttributeValues(['foo']));

      expect(value).toStrictEqual(['bar']);
    });

    it('returns an array with undefined values if a non-existent attribute is requested', () => {
      setupGlobalShopifyMock({
        attributes: createMockSubscribableSignalLike([
          {key: 'bar', value: 'baz'},
        ]),
      });

      const {value} = mount.hook(() => useAttributeValues(['foo', 'bar']));

      expect(value).toStrictEqual([undefined, 'baz']);
    });
  });
});

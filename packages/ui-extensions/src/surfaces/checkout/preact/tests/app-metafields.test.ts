import {faker} from '@faker-js/faker';

import type {AppMetafield} from '../../api/standard/standard';
import {useAppMetafields} from '../app-metafields';

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

describe('useAppMetafields', () => {
  afterEach(tearDownGlobalShopifyMock);

  function createMetafield(props: Partial<AppMetafield> = {}): AppMetafield {
    return {
      key: `key-${faker.string.uuid()}`,
      namespace: 'example-namespace',
      value: 'example-value',
      valueType: 'string',
      type: 'string' as const,
      ...props,
    };
  }

  const productEntry = {
    target: {id: faker.string.uuid(), type: 'product' as const},
    metafield: createMetafield(),
  };

  const variantEntry = {
    target: {id: faker.string.uuid(), type: 'variant' as const},
    metafield: createMetafield(),
  };

  it('returns all app metafield entries', () => {
    const appMetaFieldEntries = [productEntry, variantEntry];
    setupGlobalShopifyMock({
      appMetafields: createMockSubscribableSignalLike(appMetaFieldEntries),
    });

    const {value} = mount.hook(() => useAppMetafields());

    expect(value).toMatchObject(appMetaFieldEntries);
  });

  it('returns filtered app metafield entries based on type', () => {
    const appMetaFieldEntries = [productEntry, variantEntry];
    setupGlobalShopifyMock({
      appMetafields: createMockSubscribableSignalLike(appMetaFieldEntries),
    });

    const {value} = mount.hook(() => useAppMetafields({type: 'product'}));

    expect(value).toMatchObject([productEntry]);
  });

  it('returns filtered app metafield entry based on id', () => {
    const testId = faker.string.uuid();
    const newEntry = {
      target: {id: testId, type: 'product' as const},
      metafield: createMetafield(),
    };

    const appMetaFieldEntries = [newEntry, variantEntry];
    setupGlobalShopifyMock({
      appMetafields: createMockSubscribableSignalLike(appMetaFieldEntries),
    });

    const {value} = mount.hook(() => useAppMetafields({id: testId}));

    expect(value).toMatchObject([newEntry]);
  });

  it('returns filtered app metafield entries based on namespace', () => {
    const testNamespace = 'test_namespace';
    const newEntry = {
      target: {id: faker.string.uuid(), type: 'product' as const},
      metafield: createMetafield({namespace: testNamespace}),
    };

    const appMetaFieldEntries = [newEntry, productEntry, variantEntry];
    setupGlobalShopifyMock({
      appMetafields: createMockSubscribableSignalLike(appMetaFieldEntries),
    });

    const {value} = mount.hook(() =>
      useAppMetafields({namespace: testNamespace}),
    );

    expect(value).toMatchObject([newEntry]);
  });

  it('returns filtered app metafield entries based on namespace & key', () => {
    const testNamespace = 'test_namespace';
    const testKey = 'test_key';
    const newEntry = {
      target: {id: faker.string.uuid(), type: 'product' as const},
      metafield: createMetafield({namespace: testNamespace, key: testKey}),
    };

    const appMetaFieldEntries = [newEntry, productEntry, variantEntry];
    setupGlobalShopifyMock({
      appMetafields: createMockSubscribableSignalLike(appMetaFieldEntries),
    });

    const {value} = mount.hook(() =>
      useAppMetafields({namespace: testNamespace, key: testKey}),
    );

    expect(value).toMatchObject([newEntry]);
  });

  it('throws an error if no namespace is provided with key', () => {
    jest.spyOn(console, 'error').mockImplementation();

    const appMetaFieldEntries = [productEntry, variantEntry];
    setupGlobalShopifyMock({
      appMetafields: createMockSubscribableSignalLike(appMetaFieldEntries),
    });

    expect(() => mount.hook(() => useAppMetafields({key: 'test_key'}))).toThrow(
      'You must pass in a namespace with a key',
    );
  });

  it('returns filtered app metafield entries based on all searchable fields', () => {
    const testNamespace = 'test_namespace';
    const testKey = 'test_key';
    const testId = faker.string.uuid();

    const newEntry = {
      target: {id: testId, type: 'product' as const},
      metafield: createMetafield({namespace: testNamespace, key: testKey}),
    };

    const appMetaFieldEntries = [newEntry, productEntry, variantEntry];
    setupGlobalShopifyMock({
      appMetafields: createMockSubscribableSignalLike(appMetaFieldEntries),
    });

    const {value} = mount.hook(() =>
      useAppMetafields({
        namespace: testNamespace,
        key: testKey,
        id: testId,
        type: 'product',
      }),
    );

    expect(value).toMatchObject([newEntry]);
  });
});

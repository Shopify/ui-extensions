import {faker} from '@faker-js/faker';

import type {Metafield} from '../../api/standard/standard';

import {useMetafields} from '../metafields';

import {
  createMockSubscribableSignalLike,
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

describe('useMetafields', () => {
  afterEach(tearDownGlobalShopifyMock);

  function createMetafield(props: Partial<Metafield> = {}): Metafield {
    return {
      key: `key-${faker.string.uuid()}`,
      namespace: `namespace-${faker.word.sample()}`,
      value: `value-${faker.word.sample()}`,
      valueType: 'string',
      ...props,
    };
  }

  function createMetafields(count = 5): Metafield[] {
    return [...Array(count)].map(() => createMetafield());
  }

  it('returns all metafields', () => {
    const metafieldCount = 10;

    setupGlobalShopifyMock({
      metafields: createMockSubscribableSignalLike(
        createMetafields(metafieldCount),
      ) as any,
    });

    const {value} = mount.hook(() => useMetafields());

    expect(value).toHaveLength(metafieldCount);
  });

  it('returns an array of filtered metafields by namespace', () => {
    const namespace = 'test_namespace';
    const key = 'test_key';
    const newNamespace = createMetafield({namespace, key});

    const key2 = 'test_key2';
    const newNamespace2 = createMetafield({namespace, key: key2});

    const metafields = [newNamespace, newNamespace2, ...createMetafields()];

    setupGlobalShopifyMock({
      metafields: createMockSubscribableSignalLike(metafields),
    });

    const {value} = mount.hook(() => useMetafields({namespace}));

    expect(value).toHaveLength(2);

    expect(value[0].namespace).toStrictEqual(namespace);
    expect(value[0].key).toStrictEqual(key);

    expect(value[1].namespace).toStrictEqual(namespace);
    expect(value[1].key).toStrictEqual(key2);
  });

  it('returns an array of filtered metafields by namespace and key', () => {
    const namespace = 'test_namespace';
    const key = 'test_key';
    const newNamespace = createMetafield({namespace, key});

    const key2 = 'test_key2';
    const newNamespace2 = createMetafield({namespace, key: key2});

    const metafields = [newNamespace, newNamespace2, ...createMetafields()];

    setupGlobalShopifyMock({
      metafields: createMockSubscribableSignalLike(metafields),
    });

    const {value} = mount.hook(() => useMetafields({namespace, key}));

    expect(value).toHaveLength(1);
    expect(value[0].namespace).toStrictEqual(namespace);
    expect(value[0].key).toStrictEqual(key);
  });

  it('throws an error if no namespace is provided with key', () => {
    jest.spyOn(console, 'error').mockImplementation();

    setupGlobalShopifyMock({
      metafields: createMockSubscribableSignalLike(createMetafields()) as any,
    });

    expect(() =>
      mount.hook(() => useMetafields({key: 'test_key'} as any)),
    ).toThrow('You must pass in a namespace with a key');
  });
});

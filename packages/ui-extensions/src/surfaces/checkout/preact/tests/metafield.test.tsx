import {faker} from '@faker-js/faker';

import type {Metafield} from '../../api/standard/standard';

import {useMetafield} from '../metafield';

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

  it('returns undefined metafield', () => {
    const metafieldCount = 10;

    setupGlobalShopifyMock({
      metafields: createMockSubscribableSignalLike(
        createMetafields(metafieldCount),
      ) as any,
    });

    const namespace = 'test_namespace';
    const key = 'test_key';

    const {value} = mount.hook(() => useMetafield({namespace, key}));

    expect(value).toBeUndefined();
  });

  it('returns a filtered metafield', () => {
    const namespace = 'test_namespace';
    const key = 'test_key';
    const newNamespace = createMetafield({namespace, key});

    const metafields = [newNamespace, ...createMetafields()];

    setupGlobalShopifyMock({
      metafields: createMockSubscribableSignalLike(metafields),
    });

    const {value} = mount.hook(() => useMetafield({namespace, key}));

    expect(value?.namespace).toStrictEqual(namespace);
    expect(value?.key).toStrictEqual(key);
  });

  it('throws an error if no namespace is provided with key', () => {
    jest.spyOn(console, 'error').mockImplementation();

    setupGlobalShopifyMock({
      metafields: createMockSubscribableSignalLike(createMetafields()) as any,
    });

    expect(() =>
      mount.hook(() =>
        useMetafield({
          namespace: undefined as unknown as string,
          key: 'test_key',
        }),
      ),
    ).toThrow('You must pass in both a namespace and key');
  });

  it('throws an error if no key is provided with namespace', () => {
    jest.spyOn(console, 'error').mockImplementation();

    setupGlobalShopifyMock({
      metafields: createMockSubscribableSignalLike(createMetafields()) as any,
    });

    const key = undefined as unknown as string;

    expect(() =>
      mount.hook(() => useMetafield({namespace: 'test_namespace', key})),
    ).toThrow('You must pass in both a namespace and key');
  });
});

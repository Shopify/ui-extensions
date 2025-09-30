import type {LocalizedField} from '../../api/standard/standard';

import {useLocalizedFields, useLocalizedField} from '../localized-fields';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useLocalizedFields', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('throws an error if localized fields are not available', () => {
    setupGlobalShopifyMock({
      localizedFields: undefined,
    });

    expect(() => {
      mount.hook(() => useLocalizedFields(['TAX_CREDENTIAL_BR']));
    }).toThrow(
      expect.objectContaining({
        name: 'ScopeNotGrantedError',
      }),
    );
  });

  it('returns all localized fields if no keys are passed', () => {
    const localizedFields: LocalizedField[] = [
      {
        key: 'TAX_CREDENTIAL_BR',
        title: 'CPF/CNPJ',
        value: 'test-value',
      },
      {
        key: 'SHIPPING_CREDENTIAL_BR',
        title: 'CPF/CNPJ',
        value: 'test-value',
      },
    ];

    setupGlobalShopifyMock({
      localizedFields: createMockSubscribableSignalLike(localizedFields),
    });

    const {value} = mount.hook(() => useLocalizedFields());

    expect(value).toStrictEqual(localizedFields);
  });

  it('returns an empty array if the passed keys array is empty', () => {
    const localizedFields: LocalizedField[] = [
      {
        key: 'TAX_CREDENTIAL_BR',
        title: 'CPF/CNPJ',
        value: 'test-value',
      },
      {
        key: 'SHIPPING_CREDENTIAL_BR',
        title: 'CPF/CNPJ',
        value: 'test-value',
      },
    ];

    setupGlobalShopifyMock({
      localizedFields: createMockSubscribableSignalLike(localizedFields),
    });

    const {value} = mount.hook(() => useLocalizedFields([]));

    expect(value).toStrictEqual([]);
  });

  it('returns an empty array if no localized fields match the passed keys', () => {
    const localizedFields: LocalizedField[] = [
      {
        key: 'TAX_CREDENTIAL_BR',
        title: 'CPF/CNPJ',
        value: 'test-value',
      },
      {
        key: 'SHIPPING_CREDENTIAL_BR',
        title: 'CPF/CNPJ',
        value: 'test-value',
      },
    ];

    setupGlobalShopifyMock({
      localizedFields: createMockSubscribableSignalLike(localizedFields),
    });

    const {value} = mount.hook(() => useLocalizedFields(['TAX_CREDENTIAL_ES']));

    expect(value).toStrictEqual([]);
  });

  it('returns an array of localized fields that match the passsed keys', () => {
    const localizedFields: LocalizedField[] = [
      {
        key: 'TAX_CREDENTIAL_MX',
        title: 'Tax credential MX',
        value: 'test-value',
      },
      {
        key: 'SHIPPING_CREDENTIAL_MX',
        title: 'Shipping credential MX',
        value: 'test-value',
      },
      {
        key: 'TAX_CREDENTIAL_USE_MX',
        title: 'Tax credential use MX',
        value: 'test-value',
      },
    ];

    setupGlobalShopifyMock({
      localizedFields: createMockSubscribableSignalLike(localizedFields),
    });

    const {value} = mount.hook(() =>
      useLocalizedFields(['TAX_CREDENTIAL_MX', 'TAX_CREDENTIAL_USE_MX']),
    );

    expect(value).toMatchObject([localizedFields[0], localizedFields[2]]);
  });

  it('returns an array of localized fields for any matching fields', () => {
    const localizedFields: LocalizedField[] = [
      {
        key: 'TAX_CREDENTIAL_MX',
        title: 'Tax credential MX',
        value: 'test-value',
      },
      {
        key: 'SHIPPING_CREDENTIAL_MX',
        title: 'Shipping credential MX',
        value: 'test-value',
      },
      {
        key: 'TAX_CREDENTIAL_USE_MX',
        title: 'Tax credential use MX',
        value: 'test-value',
      },
    ];

    setupGlobalShopifyMock({
      localizedFields: createMockSubscribableSignalLike(localizedFields),
    });

    const {value} = mount.hook(() =>
      useLocalizedFields([
        'TAX_CREDENTIAL_MX',
        'TAX_CREDENTIAL_BR',
        'TAX_CREDENTIAL_USE_MX',
      ]),
    );

    expect(value).toMatchObject([localizedFields[0], localizedFields[2]]);
  });
});

describe('useLocalizedField', () => {
  afterEach(tearDownGlobalShopifyMock);
  it('returns the localized field that matches the passed key', async () => {
    const localizedFields: LocalizedField[] = [
      {
        key: 'TAX_CREDENTIAL_MX',
        title: 'Tax credential MX',
        value: 'test-value-1',
      },
      {
        key: 'SHIPPING_CREDENTIAL_MX',
        title: 'Shipping credential MX',
        value: 'test-value-2',
      },
      {
        key: 'TAX_CREDENTIAL_USE_MX',
        title: 'Tax credential use MX',
        value: 'test-value-3',
      },
    ];

    setupGlobalShopifyMock({
      localizedFields: createMockSubscribableSignalLike(localizedFields),
    });

    const {value} = mount.hook(() =>
      useLocalizedField('TAX_CREDENTIAL_USE_MX'),
    );

    expect(value).toStrictEqual(localizedFields[2]);
  });

  it('returns undefined if no localized field matches the passed key', async () => {
    const localizedFields: LocalizedField[] = [];

    setupGlobalShopifyMock({
      localizedFields: createMockSubscribableSignalLike(localizedFields),
    });

    const {value} = mount.hook(() =>
      useLocalizedField('TAX_CREDENTIAL_USE_MX'),
    );

    expect(value).toBeUndefined();
  });
});

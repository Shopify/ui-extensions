import type {LocalizedField} from '@shopify/ui-extensions/checkout';

import {useLocalizedFields} from '../localized-fields';

import {mount, createMockStatefulRemoteSubscribable} from './mount';

describe('useLocalizedFields', () => {
  it('throws an error if localized fields are not available', () => {
    const extensionApi = {
      localizedFields: undefined,
    };

    expect(() => {
      mount.hook(() => useLocalizedFields(['TAX_CREDENTIAL_BR']), {
        extensionApi,
      });
    }).toThrow(
      'Using localized fields requires having personal customer data permissions granted to your app.',
    );
  });

  it('returns empty if no localized fields match the passed keys', () => {
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

    const extensionApi = {
      localizedFields: createMockStatefulRemoteSubscribable(localizedFields),
    };

    const {value} = mount.hook(
      () => useLocalizedFields(['TAX_CREDENTIAL_ES']),
      {extensionApi},
    );

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

    const extensionApi = {
      localizedFields: createMockStatefulRemoteSubscribable(localizedFields),
    };

    const {value} = mount.hook(
      () => useLocalizedFields(['TAX_CREDENTIAL_MX', 'TAX_CREDENTIAL_USE_MX']),
      {extensionApi},
    );

    expect(value).toMatchObject([localizedFields[0], localizedFields[2]]);
  });
});

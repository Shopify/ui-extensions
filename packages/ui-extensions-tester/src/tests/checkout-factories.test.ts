import type {AcceptedAddressInputField} from '@shopify/ui-extensions/checkout';

import {createMockCheckoutTargetApi} from '../checkout/factories';
import {createAcceptedAddressInputFieldsForCountry} from '../checkout';

const FLAT_ADDRESS_INPUT_FIELDS: AcceptedAddressInputField[] = [
  'firstName',
  'lastName',
  'company',
  'address1',
  'address2',
  'city',
  'provinceCode',
  'zip',
  'countryCode',
  'phone',
];

const BRAZIL_ADDRESS_INPUT_FIELDS = [
  ...FLAT_ADDRESS_INPUT_FIELDS,
  'streetName',
  'streetNumber',
  'additionalInformation',
  'district',
] as const;

describe('checkout localization factory', () => {
  it('resolves the flat address input fields for any country by default', async () => {
    const api = createMockCheckoutTargetApi('purchase.checkout.block.render');

    expect(
      await api.localization.acceptedAddressInputFieldsForCountry('US'),
    ).toStrictEqual(FLAT_ADDRESS_INPUT_FIELDS);
    expect(
      await api.localization.acceptedAddressInputFieldsForCountry('BR'),
    ).toStrictEqual(FLAT_ADDRESS_INPUT_FIELDS);
  });

  it('gives the default country the same flat address input fields', () => {
    const api = createMockCheckoutTargetApi('purchase.checkout.block.render');

    expect(api.localization.country.value).toStrictEqual({
      isoCode: 'US',
      acceptedAddressInputFields: FLAT_ADDRESS_INPUT_FIELDS,
    });
  });
});

describe('address autocomplete factories', () => {
  it('suggest target carries the flat address input fields', () => {
    const api = createMockCheckoutTargetApi(
      'purchase.address-autocomplete.suggest',
    );

    expect(api.target.acceptedAddressInputFields).toStrictEqual(
      FLAT_ADDRESS_INPUT_FIELDS,
    );
  });

  it('format-suggestion target carries the flat address input fields', () => {
    const api = createMockCheckoutTargetApi(
      'purchase.address-autocomplete.format-suggestion',
    );

    expect(api.target.acceptedAddressInputFields).toStrictEqual(
      FLAT_ADDRESS_INPUT_FIELDS,
    );
  });
});

describe('createAcceptedAddressInputFieldsForCountry', () => {
  it('resolves the flat address input fields without overrides', async () => {
    const acceptedAddressInputFieldsForCountry =
      createAcceptedAddressInputFieldsForCountry();

    expect(await acceptedAddressInputFieldsForCountry('CA')).toStrictEqual(
      FLAT_ADDRESS_INPUT_FIELDS,
    );
  });

  it('resolves an override for its country', async () => {
    const acceptedAddressInputFieldsForCountry =
      createAcceptedAddressInputFieldsForCountry({
        BR: [...BRAZIL_ADDRESS_INPUT_FIELDS],
      });

    expect(await acceptedAddressInputFieldsForCountry('BR')).toStrictEqual(
      BRAZIL_ADDRESS_INPUT_FIELDS,
    );
  });

  it('resolves the flat address input fields for countries without an override', async () => {
    const acceptedAddressInputFieldsForCountry =
      createAcceptedAddressInputFieldsForCountry({
        BR: [...BRAZIL_ADDRESS_INPUT_FIELDS],
      });

    expect(await acceptedAddressInputFieldsForCountry('US')).toStrictEqual(
      FLAT_ADDRESS_INPUT_FIELDS,
    );
  });

  it('resolves an empty override to model a country shipping restrictions exclude', async () => {
    const acceptedAddressInputFieldsForCountry =
      createAcceptedAddressInputFieldsForCountry({CU: []});

    expect(await acceptedAddressInputFieldsForCountry('CU')).toStrictEqual([]);
  });

  it('resolves a fresh array on each call', async () => {
    const acceptedAddressInputFieldsForCountry =
      createAcceptedAddressInputFieldsForCountry();

    const first = await acceptedAddressInputFieldsForCountry('US');
    first.pop();

    expect(await acceptedAddressInputFieldsForCountry('US')).toStrictEqual(
      FLAT_ADDRESS_INPUT_FIELDS,
    );
  });
});

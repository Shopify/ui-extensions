import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.address-autocomplete.format-suggestion',
  async ({target}) => {
    // 1. Use the suggestion the buyer selected
    const {selectedSuggestion} = target;

    // 2. Fetch the address parts to format the address
    const {
      address1,
      address2,
      city,
      zip,
      provinceCode,
      countryCode,
    } = await fetch(
      `https://myapp.com/api/fetch-address?id=${selectedSuggestion.id}`,
    );

    // 3. Return a formatted address
    return {
      formattedAddress: {
        address1,
        address2,
        city,
        zip,
        provinceCode,
        countryCode,
      },
    };
  },
);

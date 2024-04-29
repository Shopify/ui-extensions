import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.address-autocomplete.suggest',
  async (api) => {
    const {
      signal,
      target: {value, field},
    } = api;

    const suggestions =
      await fetchAddressAutocompleteSuggestions(
        value,
        signal,
      );

    async function fetchAddressAutocompleteSuggestions(
      value,
      signal,
    ) {
      const response = await fetch(
        `https://myapp.com/api?query=${value}&field=${field}`,
        {signal},
      );
      return response.json();
    }

    return {suggestions};
  },
);

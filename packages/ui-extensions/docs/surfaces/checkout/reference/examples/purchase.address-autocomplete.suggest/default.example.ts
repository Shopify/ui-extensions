import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.address-autocomplete.suggest',
  async ({signal, target}) => {
    // 1. Use the query term the buyer entered
    const {field, value} = target;

    // 2. Fetch address suggestions
    const response = await fetch(
      `https://myapp.com/api/address-suggestions?query=${value}&field=${field}`,
      {signal},
    );

    // 3. Map response data to expected format
    const {data} = await response.json();
    const suggestions = data.map((suggestion) => {
      return {
        id: suggestion.id,
        label: suggestion.label,
        matchedSubstrings:
          suggestion.matchedSubstrings,
        formattedAddress: {
          address1: suggestion.address1,
          address2: suggestion.address2,
          city: suggestion.city,
          zip: suggestion.zip,
          provinceCode: suggestion.provinceCode,
          countryCode: suggestion.countryCode,
        },
      };
    });

    // 4. Return up to five address suggestions
    return {
      suggestions: suggestions.slice(0, 5),
    };
  },
);

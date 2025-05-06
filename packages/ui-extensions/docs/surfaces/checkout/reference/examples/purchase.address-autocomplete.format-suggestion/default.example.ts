export default async function extension() {
  // 1. Use the suggestion the buyer selected
  const {selectedSuggestion} = shopify.target;

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
}

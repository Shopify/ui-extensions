const {applyMetafieldChange, data} = useApi(TARGET);

const blockedCountries = ['US', 'CA', 'GB'];

await applyMetafieldChange({
  type: 'updateMetafield',
  namespace: 'validation',
  key: 'blocked_shipping_countries',
  value: JSON.stringify(blockedCountries),
  valueType: 'json',
});

await applyMetafieldChange({
  type: 'updateMetafield',
  namespace: 'validation',
  key: 'error_message',
  value: 'Shipping not available to your location',
  valueType: 'single_line_text_field',
});

console.log('Validation ID:', data.validation?.id);
console.log('Function ID:', data.shopifyFunction.id);

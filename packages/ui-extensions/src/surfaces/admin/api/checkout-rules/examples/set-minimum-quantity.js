const {applyMetafieldChange} = useApi(TARGET);

const result = await applyMetafieldChange({
  type: 'updateMetafield',
  namespace: 'validation',
  key: 'minimum_quantity',
  value: '3',
  valueType: 'number_integer',
});

if (result.type === 'success') {
  console.log('Minimum quantity validation configured');
} else {
  console.error('Configuration failed:', result.message);
}

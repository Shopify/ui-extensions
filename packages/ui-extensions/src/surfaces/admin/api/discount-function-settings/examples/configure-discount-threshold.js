const {applyMetafieldChange} = useApi(TARGET);

const result = await applyMetafieldChange({
  type: 'updateMetafield',
  namespace: 'discount-config',
  key: 'minimum_purchase',
  value: '50.00',
  valueType: 'number_decimal',
});

if (result.type === 'success') {
  console.log('Discount threshold configured');
} else {
  console.error('Configuration failed:', result.message);
}

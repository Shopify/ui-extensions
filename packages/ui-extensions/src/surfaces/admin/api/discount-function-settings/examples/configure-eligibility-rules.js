const {applyMetafieldChange} = useApi(TARGET);

await applyMetafieldChange({
  type: 'updateMetafield',
  namespace: 'discount-config',
  key: 'eligible_customer_tags',
  value: JSON.stringify(['vip', 'wholesale', 'premium']),
  valueType: 'json',
});

await applyMetafieldChange({
  type: 'updateMetafield',
  namespace: 'discount-config',
  key: 'max_uses_per_customer',
  value: '5',
  valueType: 'number_integer',
});

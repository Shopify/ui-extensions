const {data, applyMetafieldChange} = useApi(TARGET);

if (data.validation) {
  const settings = data.validation.metafields.reduce((acc, field) => {
    acc[field.key] = field.value;
    return acc;
  }, {});
  
  console.log('Existing validation settings:', settings);
} else {
  await applyMetafieldChange({
    type: 'updateMetafield',
    namespace: 'validation',
    key: 'default_rule',
    value: 'require_minimum_cart_total',
    valueType: 'single_line_text_field',
  });
  
  console.log('Created new validation configuration');
}

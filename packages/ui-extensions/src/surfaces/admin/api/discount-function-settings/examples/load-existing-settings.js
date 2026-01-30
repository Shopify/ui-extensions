const {data, applyMetafieldChange} = useApi(TARGET);

const existingSettings = data.metafields.reduce((acc, field) => {
  acc[field.key] = field.value;
  return acc;
}, {});

console.log('Current settings:', existingSettings);

if (!existingSettings.eligible_tags) {
  await applyMetafieldChange({
    type: 'updateMetafield',
    namespace: 'discount-config',
    key: 'eligible_tags',
    value: JSON.stringify(['vip', 'wholesale']),
    valueType: 'json',
  });
}

const {applyMetafieldsChange, data} = useApi(TARGET);

applyMetafieldsChange([
  {
    type: 'updateMetafield',
    namespace: 'routing',
    key: 'max_distance_km',
    value: '50',
    valueType: 'number_integer',
  },
  {
    type: 'updateMetafield',
    namespace: 'routing',
    key: 'enable_inventory_check',
    value: 'true',
    valueType: 'boolean',
  },
  {
    type: 'updateMetafield',
    namespace: 'routing',
    key: 'excluded_zip_codes',
    value: JSON.stringify(['10001', '90210']),
    valueType: 'json',
  },
]);

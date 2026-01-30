const {applyMetafieldsChange} = useApi(TARGET);

applyMetafieldsChange([
  {
    type: 'updateMetafield',
    namespace: 'routing',
    key: 'preferred_location',
    value: 'gid://shopify/Location/123456789',
    valueType: 'single_line_text_field',
  },
  {
    type: 'updateMetafield',
    namespace: 'routing',
    key: 'fallback_location',
    value: 'gid://shopify/Location/987654321',
    valueType: 'single_line_text_field',
  },
]);

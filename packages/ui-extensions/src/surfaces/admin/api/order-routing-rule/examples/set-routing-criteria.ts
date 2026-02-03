import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.order-routing-rule.render',
  (root, api) => {
    const {applyMetafieldsChange} = api;

    applyMetafieldsChange([
      {
        type: 'updateMetafield',
        key: 'max_distance',
        namespace: 'routing',
        value: '50',
        valueType: 'number_integer',
      },
      {
        type: 'updateMetafield',
        key: 'check_inventory',
        namespace: 'routing',
        value: 'true',
        valueType: 'boolean',
      },
      {
        type: 'updateMetafield',
        key: 'excluded_zips',
        namespace: 'routing',
        value: JSON.stringify(['90210', '10001']),
        valueType: 'json',
      },
    ]);
  },
);

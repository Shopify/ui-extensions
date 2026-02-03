import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.order-routing-rule.render',
  (root, api) => {
    const {applyMetafieldsChange} = api;

    applyMetafieldsChange([
      {
        type: 'updateMetafield',
        key: 'preferred_location',
        namespace: 'routing',
        value: 'New York Warehouse',
      },
      {
        type: 'updateMetafield',
        key: 'fallback_location',
        namespace: 'routing',
        value: 'Los Angeles Warehouse',
      },
    ]);
  },
);

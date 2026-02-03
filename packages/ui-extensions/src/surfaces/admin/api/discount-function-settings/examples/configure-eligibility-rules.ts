import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.discount-details.function-settings.render',
  (root, api) => {
    const {applyMetafieldChange} = api;

    const tags = ['vip', 'wholesale'];

    applyMetafieldChange({
      type: 'updateMetafield',
      key: 'customer_tags',
      namespace: 'discount_function',
      value: JSON.stringify(tags),
      valueType: 'json',
    }).then(() => {
      return applyMetafieldChange({
        type: 'updateMetafield',
        key: 'usage_limit',
        namespace: 'discount_function',
        value: '100',
        valueType: 'number_integer',
      });
    });
  },
);

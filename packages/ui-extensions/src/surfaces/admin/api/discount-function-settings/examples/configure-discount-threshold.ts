import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.discount-details.function-settings.render',
  (root, api) => {
    const {applyMetafieldChange} = api;

    applyMetafieldChange({
      type: 'updateMetafield',
      key: 'min_purchase_amount',
      namespace: 'discount_function',
      value: '50.00',
      valueType: 'number_decimal',
    }).then((result) => {
      if (result.type === 'success') {
        console.log('Threshold saved');
      }
    });
  },
);

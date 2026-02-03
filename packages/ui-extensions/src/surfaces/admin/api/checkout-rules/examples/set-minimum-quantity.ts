import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  (root, api) => {
    const {applyMetafieldChange} = api;

    applyMetafieldChange({
      type: 'updateMetafield',
      key: 'min_quantity',
      namespace: 'validation',
      value: '5',
      valueType: 'number_integer',
    }).then((result) => {
      if (result.type === 'success') {
        console.log('Minimum quantity saved');
      } else {
        console.error('Error:', result.message);
      }
    });
  },
);

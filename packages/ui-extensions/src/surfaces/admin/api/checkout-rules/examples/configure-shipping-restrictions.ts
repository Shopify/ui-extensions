import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  (root, api) => {
    const {applyMetafieldChange} = api;

    const blockedCountries = ['US', 'CA', 'MX'];

    applyMetafieldChange({
      type: 'updateMetafield',
      key: 'blocked_countries',
      namespace: 'validation',
      value: JSON.stringify(blockedCountries),
      valueType: 'json',
    }).then((result) => {
      if (result.type === 'success') {
        console.log('Shipping restrictions saved');
      }
    });
  },
);

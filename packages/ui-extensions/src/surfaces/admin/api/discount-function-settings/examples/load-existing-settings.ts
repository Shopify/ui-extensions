import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.discount-details.function-settings.render',
  (root, api) => {
    const {data} = api;

    const metafields = data.metafields;
    const settings = metafields.reduce((acc, mf) => {
      acc[mf.key] = mf.value;
      return acc;
    }, {});

    console.log('Current discount settings:', settings);
  },
);

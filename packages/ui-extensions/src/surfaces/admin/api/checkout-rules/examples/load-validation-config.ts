import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  (root, api) => {
    const {data} = api;

    if (data.validation) {
      const metafields = data.validation.metafields;
      const config = metafields.reduce((acc, mf) => {
        acc[mf.key] = mf.value;
        return acc;
      }, {});
      
      console.log('Existing validation:', config);
    } else {
      console.log('Creating new validation');
    }
  },
);

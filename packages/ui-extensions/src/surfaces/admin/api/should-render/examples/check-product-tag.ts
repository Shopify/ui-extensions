import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.should-render',
  (root, api) => {
    const {data} = api;

    return {display: data.selected.length > 0};
  },
);

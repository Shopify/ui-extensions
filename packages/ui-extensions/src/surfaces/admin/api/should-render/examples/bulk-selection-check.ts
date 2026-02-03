import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-index.action.should-render',
  (root, api) => {
    const {data} = api;

    const count = data.selected.length;
    return {display: count >= 1 && count <= 50};
  },
);

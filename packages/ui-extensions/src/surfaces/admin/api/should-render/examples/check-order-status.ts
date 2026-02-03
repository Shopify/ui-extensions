import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.order-details.action.should-render',
  (root, api) => {
    const {data} = api;

    return {display: data.selected.length === 1};
  },
);

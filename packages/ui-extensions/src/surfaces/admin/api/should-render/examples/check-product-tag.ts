import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.should-render',
  (api) => {
    const {data} = api;

    const hasSelection = data.selected.length > 0;

    return {display: hasSelection};
  },
);

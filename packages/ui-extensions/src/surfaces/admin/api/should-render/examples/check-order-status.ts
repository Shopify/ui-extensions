import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.order-details.action.should-render',
  (api) => {
    const {data} = api;

    const selectedCount = data.selected.length;

    return {display: selectedCount === 1};
  },
);

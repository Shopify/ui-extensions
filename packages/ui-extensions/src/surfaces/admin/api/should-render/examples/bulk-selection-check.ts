import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-index.action.should-render',
  (api) => {
    const {data} = api;

    const selectedCount = data.selected.length;
    const isWithinLimit = selectedCount > 0 && selectedCount <= 50;

    return {display: isWithinLimit};
  },
);

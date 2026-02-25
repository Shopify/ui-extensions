import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const BulkSelectionCheck = () => {
  const {data} = useApi<'admin.product-index.action.should-render'>();

  const selectedCount = data.selected.length;
  const isWithinLimit = selectedCount > 0 && selectedCount <= 50;

  return {display: isWithinLimit};
};

export default reactExtension(
  'admin.product-index.action.should-render',
  () => BulkSelectionCheck(),
);

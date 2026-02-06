import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const CheckProductTag = () => {
  const {data} = useApi<'admin.product-details.action.should-render'>();

  const hasSelection = data.selected.length > 0;

  return {display: hasSelection};
};

export default reactExtension(
  'admin.product-details.action.should-render',
  () => CheckProductTag(),
);

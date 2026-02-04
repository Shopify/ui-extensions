import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const CheckOrderStatus = () => {
  const {data} = useApi<'admin.order-details.action.should-render'>();

  const selectedCount = data.selected.length;

  return {display: selectedCount === 1};
};

export default reactExtension(
  'admin.order-details.action.should-render',
  () => CheckOrderStatus(),
);

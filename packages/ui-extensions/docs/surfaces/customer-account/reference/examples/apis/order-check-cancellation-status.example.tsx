import {
  reactExtension,
  useOrder,
} from '@shopify/ui-extensions-react/customer-account';
import {
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const order = useOrder();

  if (!order?.cancelledAt) {
    return null;
  }

  return (
    <Banner status="critical" title="Order cancelled">
      <Text>
        This order was cancelled on{' '}
        {new Date(order.cancelledAt).toLocaleDateString()}.
      </Text>
    </Banner>
  );
}

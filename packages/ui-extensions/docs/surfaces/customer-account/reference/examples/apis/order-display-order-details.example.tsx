import {
  reactExtension,
  useOrder,
} from '@shopify/ui-extensions-react/customer-account';
import {
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const order = useOrder();

  if (!order) {
    return <Text>Loading order details...</Text>;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Order {order.name}</Text>
      {order.confirmationNumber && (
        <Text>
          Confirmation: {order.confirmationNumber}
        </Text>
      )}
      {order.processedAt && (
        <Text appearance="subdued">
          Placed on{' '}
          {new Date(order.processedAt).toLocaleDateString()}
        </Text>
      )}
    </BlockStack>
  );
}

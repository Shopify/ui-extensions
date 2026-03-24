import {
  reactExtension,
  useCartLines,
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
  const lines = useCartLines();

  return (
    <BlockStack>
      <Text emphasis="bold">Order items ({lines.length})</Text>
      {lines.map((line) => (
        <Text key={line.id}>
          {line.merchandise.title} × {line.quantity} —{' '}
          {line.cost.totalAmount.amount}{' '}
          {line.cost.totalAmount.currencyCode}
        </Text>
      ))}
    </BlockStack>
  );
}

import {
  reactExtension,
  useApi,
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
  const {cost} =
    useApi<'customer-account.order-status.block.render'>();

  const subtotal = cost.subtotalAmount.current;
  const total = cost.totalAmount.current;

  return (
    <BlockStack>
      <Text>
        Subtotal: {subtotal.amount} {subtotal.currencyCode}
      </Text>
      <Text emphasis="bold">
        Total: {total.amount} {total.currencyCode}
      </Text>
    </BlockStack>
  );
}

import {
  reactExtension,
  useCustomer,
} from '@shopify/ui-extensions-react/customer-account';
import {BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const customer = useCustomer();
  if (!customer) return <Text>Guest checkout</Text>;
  return (
    <BlockStack>
      <Text emphasis="bold">Customer</Text>
      {customer.fullName && <Text>{customer.fullName}</Text>}
      {customer.email && <Text appearance="subdued">{customer.email}</Text>}
    </BlockStack>
  );
}

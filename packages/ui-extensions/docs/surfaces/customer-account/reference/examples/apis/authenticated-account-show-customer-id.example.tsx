import {
  reactExtension,
  useAuthenticatedAccountCustomer,
} from '@shopify/ui-extensions-react/customer-account';
import {Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const customer = useAuthenticatedAccountCustomer();
  if (!customer) return <Text appearance="subdued">Not authenticated</Text>;
  return <Text>Customer ID: {customer.id}</Text>;
}

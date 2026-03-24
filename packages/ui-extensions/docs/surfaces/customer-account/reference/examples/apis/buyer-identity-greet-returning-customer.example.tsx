import {
  reactExtension,
  useCustomer,
} from '@shopify/ui-extensions-react/customer-account';
import {Banner, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const customer = useCustomer();
  if (!customer?.firstName) return null;
  return (
    <Banner status="info">
      <Text>Thanks for your order, {customer.firstName}!</Text>
    </Banner>
  );
}

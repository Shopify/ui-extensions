import {
  reactExtension,
  useAuthenticatedAccountCustomer,
  useAuthenticatedAccountPurchasingCompany,
} from '@shopify/ui-extensions-react/customer-account';
import {Banner, BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const customer = useAuthenticatedAccountCustomer();
  const company = useAuthenticatedAccountPurchasingCompany();
  if (!customer) return null;
  if (!company) return <Text>Customer: {customer.id}</Text>;
  return (
    <Banner status="info">
      <BlockStack>
        <Text emphasis="bold">{company.company.id}</Text>
        {company.location && <Text>Location: {company.location.id}</Text>}
      </BlockStack>
    </Banner>
  );
}

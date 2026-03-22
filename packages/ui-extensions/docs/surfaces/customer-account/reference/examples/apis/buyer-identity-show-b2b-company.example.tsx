import {
  reactExtension,
  usePurchasingCompany,
} from '@shopify/ui-extensions-react/customer-account';
import {BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const purchasingCompany = usePurchasingCompany();
  if (!purchasingCompany) return null;
  return (
    <BlockStack>
      <Text emphasis="bold">B2B order</Text>
      <Text>Company: {purchasingCompany.company.name}</Text>
      {purchasingCompany.location && (
        <Text>Location: {purchasingCompany.location.name}</Text>
      )}
    </BlockStack>
  );
}

import {
  reactExtension,
  useBillingAddress,
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
  const address = useBillingAddress();

  if (!address) {
    return <Text>No billing address available.</Text>;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Billing address</Text>
      {address.name && <Text>{address.name}</Text>}
      {address.address1 && <Text>{address.address1}</Text>}
      <Text>
        {[address.city, address.zoneCode, address.zip]
          .filter(Boolean)
          .join(', ')}
      </Text>
    </BlockStack>
  );
}

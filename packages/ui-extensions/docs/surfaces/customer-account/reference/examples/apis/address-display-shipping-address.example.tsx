import {
  reactExtension,
  useShippingAddress,
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
  const address = useShippingAddress();

  if (!address) {
    return <Text>No shipping address available.</Text>;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Shipping address</Text>
      {address.name && <Text>{address.name}</Text>}
      {address.address1 && <Text>{address.address1}</Text>}
      {address.address2 && <Text>{address.address2}</Text>}
      <Text>
        {[address.city, address.zoneCode, address.zip]
          .filter(Boolean)
          .join(', ')}
      </Text>
      {address.territoryCode && <Text>{address.territoryCode}</Text>}
    </BlockStack>
  );
}

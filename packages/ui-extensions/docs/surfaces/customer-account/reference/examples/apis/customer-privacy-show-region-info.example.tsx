import {
  reactExtension,
  useCustomerPrivacy,
} from '@shopify/ui-extensions-react/customer-account';
import {BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const privacy = useCustomerPrivacy();
  return (
    <BlockStack>
      {privacy.region && (
        <Text>
          Region: {privacy.region.territoryCode}
          {privacy.region.zoneCode && `, ${privacy.region.zoneCode}`}
        </Text>
      )}
      {privacy.saleOfDataRegion && (
        <Text appearance="subdued">Data sale opt-out controls are available in your region.</Text>
      )}
    </BlockStack>
  );
}

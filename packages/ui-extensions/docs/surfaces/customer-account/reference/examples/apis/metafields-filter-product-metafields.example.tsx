import {
  reactExtension,
  useAppMetafields,
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
  const productMetafields = useAppMetafields({
    type: 'product',
  });

  if (productMetafields.length === 0) {
    return null;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Product details</Text>
      {productMetafields.map((entry) => (
        <Text key={entry.metafield.key}>
          {entry.metafield.key}: {String(entry.metafield.value)}
        </Text>
      ))}
    </BlockStack>
  );
}

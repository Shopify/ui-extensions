import {
  reactExtension,
  useAttributes,
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
  const attributes = useAttributes();

  if (!attributes || attributes.length === 0) {
    return null;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Order details</Text>
      {attributes.map((attr) => (
        <Text key={attr.key}>
          {attr.key}: {attr.value}
        </Text>
      ))}
    </BlockStack>
  );
}

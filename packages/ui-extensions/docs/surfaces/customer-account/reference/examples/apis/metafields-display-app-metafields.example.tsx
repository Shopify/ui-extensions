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
  const appMetafields = useAppMetafields();

  if (appMetafields.length === 0) {
    return null;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Custom data</Text>
      {appMetafields.map((entry) => (
        <Text key={`${entry.target.type}-${entry.metafield.key}`}>
          {entry.metafield.namespace}.{entry.metafield.key}:{' '}
          {String(entry.metafield.value)}
        </Text>
      ))}
    </BlockStack>
  );
}

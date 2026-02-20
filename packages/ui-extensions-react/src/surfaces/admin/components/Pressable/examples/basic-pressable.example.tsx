import {reactExtension, useApi, Pressable, Text, Icon, InlineStack, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Quick actions</Text>
      <Pressable
        padding="base"
        onPress={async () => {
          await fetch('/api/products/sync', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId}),
          });
        }}
      >
        <InlineStack gap blockAlignment="center">
          <Icon name="RefreshMajor" accessibilityLabel="" />
          <Text>Sync inventory now</Text>
        </InlineStack>
      </Pressable>
      <Pressable
        padding="base"
        onPress={async () => {
          await fetch('/api/products/export', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId}),
          });
        }}
      >
        <InlineStack gap blockAlignment="center">
          <Icon name="ExportMinor" accessibilityLabel="" />
          <Text>Export product data</Text>
        </InlineStack>
      </Pressable>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

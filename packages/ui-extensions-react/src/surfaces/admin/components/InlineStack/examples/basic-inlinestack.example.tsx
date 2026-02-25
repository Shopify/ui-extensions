import {reactExtension, useApi, InlineStack, Text, Badge, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;

  return (
    <BlockStack gap>
      <InlineStack gap>
        <Text fontWeight="bold">Product:</Text>
        <Text>{productId || 'Unknown'}</Text>
        <Badge tone="success">Active</Badge>
      </InlineStack>
      <InlineStack gap>
        <Text fontWeight="bold">SKU:</Text>
        <Text>WH-1234</Text>
        <Text fontWeight="bold">Weight:</Text>
        <Text>2.5 kg</Text>
      </InlineStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

import {reactExtension, useApi, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const numericId = productId?.split('/').pop();

  return (
    <BlockStack>
      <Text>External resources</Text>
      <Button
        href={`https://your-store.myshopify.com/products/${numericId}`}
        target="_blank"
        variant="secondary"
        accessibilityLabel="View product on storefront in a new tab"
      >
        View on storefront
      </Button>
      <Button
        href="https://help.shopify.com/manual/products"
        target="_blank"
        variant="tertiary"
      >
        Product documentation
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

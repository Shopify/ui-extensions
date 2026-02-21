import {reactExtension, useApi, Pressable, Text, Image, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const numericId = productId?.split('/').pop();

  return (
    <BlockStack gap>
      <Pressable
        href={`https://your-store.myshopify.com/products/${numericId}`}
        target="_blank"
        padding="base"
      >
        <Image
          source="https://cdn.shopify.com/s/files/placeholder-images/product.png"
          accessibilityLabel="Product preview"
        />
        <Text fontWeight="bold">View on storefront</Text>
        <Text>Opens the live product page in a new tab</Text>
      </Pressable>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

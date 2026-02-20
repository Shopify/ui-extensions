import {reactExtension, useApi, Link, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const numericId = productId?.split('/').pop();

  return (
    <BlockStack gap>
      <Text fontWeight="bold">External resources</Text>
      <Link
        href={`https://your-store.myshopify.com/products/${numericId}`}
        target="_blank"
      >
        View on storefront
      </Link>
      <Link href="https://help.shopify.com/manual/products" target="_blank">
        Shopify product documentation
      </Link>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

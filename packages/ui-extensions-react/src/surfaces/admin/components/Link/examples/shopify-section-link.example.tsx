import {reactExtension, useApi, Link, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const numericId = productId?.split('/').pop();

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Admin navigation</Text>
      <Link href="shopify://admin/orders">View all orders</Link>
      <Link href={`shopify://admin/products/${numericId}/inventory`}>
        Manage inventory
      </Link>
      <Link href={`shopify://admin/products/${numericId}`} tone="critical">
        Edit product (admin)
      </Link>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

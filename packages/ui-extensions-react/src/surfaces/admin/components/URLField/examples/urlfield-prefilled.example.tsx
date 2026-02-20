import {reactExtension, useApi, URLField, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const numericId = productId?.split('/').pop();

  return (
    <BlockStack>
      <Text fontWeight="bold">Product links</Text>
      <URLField
        label="Storefront URL"
        name="storefrontUrl"
        value={`https://your-store.myshopify.com/products/${numericId}`}
        readOnly
      />
      <URLField label="External catalog URL" name="externalUrl" />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

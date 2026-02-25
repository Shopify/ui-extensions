import {reactExtension, Image, Heading, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Image
        source="https://cdn.shopify.com/s/files/partner-branding/banner.png"
        accessibilityLabel=""
        accessibilityRole="decorative"
      />
      <Heading>Warehouse connection active</Heading>
      <Text>
        Your products are syncing automatically every 15 minutes with your
        warehouse management system.
      </Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

import {reactExtension, DateField, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Important dates</Text>
      <DateField label="Date created" name="dateCreated" value="2024-01-15" readOnly />
      <DateField label="Last warehouse sync" name="lastSync" value="2024-03-20" readOnly />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

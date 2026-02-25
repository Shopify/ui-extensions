import {reactExtension, Section, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Section heading="Inventory details">
        <Text>Warehouse: East Coast — New York</Text>
        <Text>Storage slot: A-42</Text>
        <Text>Units in stock: 247</Text>
      </Section>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

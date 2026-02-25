import {reactExtension, Select, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Product classification</Text>
      <Select
        label="Product category"
        name="category"
        placeholder="Select a category…"
        options={[
          {label: 'Electronics', value: 'electronics'},
          {label: 'Apparel', value: 'apparel'},
          {label: 'Home & Garden', value: 'home-garden'},
          {label: 'Health & Beauty', value: 'health-beauty'},
          {label: 'Food & Beverage', value: 'food-beverage'},
        ]}
      />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

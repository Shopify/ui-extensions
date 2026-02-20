import {useState} from 'react';
import {reactExtension, MoneyField, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const [price, setPrice] = useState(undefined);

  return (
    <BlockStack>
      <Text fontWeight="bold">Product pricing</Text>
      <MoneyField
        label="Retail price"
        name="retailPrice"
        value={price}
        onChange={setPrice}
      />
      <MoneyField
        label="Compare-at price"
        name="compareAtPrice"
      />
      <MoneyField
        label="Cost per item"
        name="costPerItem"
      />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);

import {reactExtension, MoneyField, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Regional pricing</Text>
      <MoneyField label="US price" name="priceUsd" currencyCode="USD" value={49.99} />
      <MoneyField label="EU price" name="priceEur" currencyCode="EUR" value={44.99} />
      <MoneyField label="UK price" name="priceGbp" currencyCode="GBP" value={39.99} />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

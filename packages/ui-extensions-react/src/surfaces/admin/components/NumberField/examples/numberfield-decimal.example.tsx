import {reactExtension, NumberField, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Cost pricing</Text>
      <NumberField
        label="Cost per item"
        name="costPerItem"
        inputMode="decimal"
        min={0}
        step={0.01}
        suffix="USD"
      />
      <NumberField
        label="Profit margin"
        name="margin"
        inputMode="decimal"
        min={0}
        max={100}
        step={0.5}
        suffix="%"
      />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);

import {useState} from 'react';
import {reactExtension, NumberField, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <Text fontWeight="bold">Warehouse slot configuration</Text>
      <NumberField
        label="Storage slot number"
        name="slotNumber"
        min={1}
        max={500}
        step={1}
        error={error}
        onChange={(value) => {
          setError(value > 500 ? 'Slot number cannot exceed 500' : undefined);
        }}
      />
      <NumberField
        label="Units per pallet"
        name="unitsPerPallet"
        min={1}
        max={200}
        step={1}
      />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

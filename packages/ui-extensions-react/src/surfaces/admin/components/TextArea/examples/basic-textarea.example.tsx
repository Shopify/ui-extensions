import {useState} from 'react';
import {reactExtension, useApi, TextArea, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [notes, setNotes] = useState('');

  return (
    <BlockStack>
      <TextArea
        label="Internal notes"
        name="internalNotes"
        rows={4}
        value={notes}
        onChange={setNotes}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/notes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, notes}),
          });
          close();
        }}
      >
        Save notes
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);

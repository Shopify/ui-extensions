import {useState} from 'react';
import {reactExtension, useApi, TextArea, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [description, setDescription] = useState('');
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <TextArea
        label="Product description for external catalog"
        name="catalogDescription"
        rows={5}
        maxLength={500}
        value={description}
        error={error}
        onChange={(value) => {
          setDescription(value);
          setError(
            value.length > 500
              ? 'Description cannot exceed 500 characters'
              : undefined,
          );
        }}
      />
      <Text>{description.length} / 500 characters</Text>
      <Button
        variant="primary"
        onPress={async () => {
          if (description.length <= 500) {
            await fetch('/api/products/catalog-description', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, description}),
            });
            close();
          }
        }}
      >
        Save description
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);

import {useState} from 'react';
import {reactExtension, useApi, ChoiceList, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [tags, setTags] = useState([]);

  return (
    <BlockStack>
      <Text fontWeight="bold">Apply product tags</Text>
      <ChoiceList
        name="productTags"
        multiple
        value={tags}
        choices={[
          {label: 'Seasonal', id: 'seasonal'},
          {label: 'Clearance', id: 'clearance'},
          {label: 'New arrival', id: 'new-arrival'},
          {label: 'Best seller', id: 'best-seller'},
          {label: 'Limited edition', id: 'limited-edition'},
        ]}
        onChange={setTags}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/tags', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, tags}),
          });
          close();
        }}
      >
        Apply tags
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);

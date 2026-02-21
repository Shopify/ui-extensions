import {useState} from 'react';
import {reactExtension, Image, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <BlockStack>
      {loading && (
        <Text>Loading image...</Text>
      )}
      {error ? (
        <Text>Unable to load product image.</Text>
      ) : (
        <Image
          source="https://cdn.shopify.com/s/files/placeholder-images/product.png"
          accessibilityLabel="Product preview"
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      )}
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);

import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const AuthenticateBackendRequest = () => {
  const {auth} = useApi<'admin.product-details.block.render'>();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);

    const token = await auth.idToken();

    const response = await fetch('https://my-app.com/api/products', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  return (
    <>
      <Button
        title={loading ? 'Loading...' : 'Fetch from Backend'}
        onPress={handleFetch}
        disabled={loading}
      />
      {products.length > 0 && <Text>{products.length} products loaded</Text>}
    </>
  );
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <AuthenticateBackendRequest />,
);

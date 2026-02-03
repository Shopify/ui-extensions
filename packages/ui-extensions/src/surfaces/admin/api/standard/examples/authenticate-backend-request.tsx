import React, {useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const AuthenticateBackendRequest = () => {
  const {auth} = useApi<'admin.product-details.block.render'>();
  const [products, setProducts] = useState([]);

  const handleFetch = async () => {
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
  };

  return null;
};

export default reactExtension('admin.product-details.block.render', () => <AuthenticateBackendRequest />);

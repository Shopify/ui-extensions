import {reactExtension, useApi, Text} from '@shopify/ui-extensions-react/admin';
import {useEffect, useState} from 'react';

// Get product info from a different app backend
async function getProductInfo(id, auth) {
  const token = await auth.idToken.get();
  const res = await fetch(`https://app.example.com/api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

const TARGET = 'admin.product-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  // Contextual "input" data passed to this extension:
  const {data, auth} = useApi(TARGET);
  const productId = data.selected?.[0]?.id;

  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    getProductInfo(productId, auth).then(setProductInfo);
  }, [productId, auth]);

  return <Text>Info: {productInfo?.title}</Text>;
}

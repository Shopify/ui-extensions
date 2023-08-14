import {reactExtension, useApi, Text} from '@shopify/ui-extensions-react/admin';
import {useEffect, useState} from 'react';

// Get product info from app backend
async function getProductInfo(id) {
  const res = await fetch(`/api/products/${id}`);
  return res.json();
}

const TARGET = 'admin.product-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  // Contextual "input" data passed to this extension:
  const {data} = useApi(TARGET);
  const productId = data.selected?.[0]?.id;

  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    getProductInfo(productId).then(setProductInfo);
  }, [productId]);

  return <Text>Info: {productInfo?.title}</Text>;
}

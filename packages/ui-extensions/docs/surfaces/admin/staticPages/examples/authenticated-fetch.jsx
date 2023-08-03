import {reactExtension, useApi, Text} from '@shopify/ui-extensions-react/admin';
import {useEffect, useState} from 'react';

//Get product info from app backend
async function getProductInfo(id) {
  const res = await fetch(`https://my-app.com/api/productInfo/${id}`, {
    method: 'GET',
  });
  const {data} = await res.json();
  return data;
}

const TARGET = 'admin.product-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  // Contextual "input" data passed to this extension:
  const {data} = useApi(TARGET);

  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    const productId = data.selected?.[0]?.id;
    getProductInfo(productId).then(setProductInfo);
  }, [data]);

  return <Text>The app info from the backend is: {productInfo}</Text>;
}

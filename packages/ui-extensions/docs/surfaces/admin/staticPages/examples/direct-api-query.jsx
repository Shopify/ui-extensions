import {reactExtension, useApi, Text} from '@shopify/ui-extensions-react/admin';
import {useEffect, useState} from 'react';

async function getProduct(id) {
  const {data} = await query(
    `query GetProduct($id: ID!) {
        product(id: $id) {
          title
        }
      }
    `,
    {variables: {id}},
  );
  return data;
}

const TARGET = 'admin.product-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  // Contextual "input" data passed to this extension:
  const {data} = useApi(TARGET);

  const [product, setProduct] = useState();
  useEffect(() => {
    const productId = data.selected?.[0]?.id;
    getProduct(productId).then(setProduct);
  }, [data]);

  return <Text strong>The selected product title is {product?.title}</Text>;
}

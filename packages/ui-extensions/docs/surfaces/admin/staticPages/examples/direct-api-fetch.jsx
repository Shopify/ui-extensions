import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

async function getProduct(id) {
  const res = await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query GetProduct($id: ID!) {
          product(id: $id) {
            title
          }
        }
      `,
      variables: {id},
    }),
  });
  return res.json();
}

function Extension() {
  // Contextual "input" data passed to this extension:
  const {data} = shopify;

  const [product, setProduct] = useState();
  useEffect(() => {
    const productId = data.selected?.[0]?.id;
    getProduct(productId).then(({data}) => setProduct(data.product));
  }, [data]);

  return (
    <s-admin-block title="Product Info">
      <s-text>The selected product title is {product?.title}</s-text>
    </s-admin-block>
  );
}

import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  // Contextual "input" data passed to this extension:
  const {data, query} = shopify;

  const [product, setProduct] = useState();
  useEffect(() => {
    const productId = data.selected?.[0]?.id;
    query(
      `query GetProduct($id: ID!) {
          product(id: $id) {
            title
          }
        }
      `,
      {variables: {id: productId}},
    ).then(({data}) => setProduct(data.product));
  }, [data]);

  return (
    <s-admin-block title="Product Info">
      <s-text strong>The selected product title is {product?.title}</s-text>
    </s-admin-block>
  );
}

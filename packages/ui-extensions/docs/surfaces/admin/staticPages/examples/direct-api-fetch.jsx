import {render} from 'preact';

export default async () => {
  const productId = shopify.data.selected?.[0]?.id;
  const product = await getProduct(productId);
  render(<Extension product={product} />, document.body);
};

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
  const {data} = await res.json();
  return data.product;
}

function Extension({product}) {
  return (
    <s-admin-block heading="Product Info">
      <s-text>The selected product title is {product.title}</s-text>
    </s-admin-block>
  );
}

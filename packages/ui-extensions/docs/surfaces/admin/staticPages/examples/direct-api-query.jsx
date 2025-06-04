import {render} from 'preact';

export default async () => {
  const productId = shopify.data.selected?.[0]?.id;
  const {
    data: {product},
  } = await shopify.query(
    `
    query GetProduct($id: ID!) {
      product(id: $id) {
        title
      }
    }
  `,
    {variables: {id: productId}},
  );
  render(<Extension product={product} />, document.body);
};

function Extension({product}) {
  return (
    <s-admin-block heading="Product Info">
      <s-text>The selected product title is {product.title}</s-text>
    </s-admin-block>
  );
}

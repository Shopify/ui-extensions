const {data, intents, query} = useApi(TARGET);

const variantId = data.selected[0]?.id;

const {data: parentData} = await query(
  `query GetParentProduct($id: ID!) {
    productVariant(id: $id) {
      product {
        id
      }
    }
  }`,
  {variables: {id: variantId}},
);

const productId = parentData.productVariant.product.id;

const activity = await intents.invoke('create:shopify/ProductVariant', {
  data: {productId},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Component variant created');
}

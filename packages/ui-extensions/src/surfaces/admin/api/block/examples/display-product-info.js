const {data, query} = useApi(TARGET);

const productId = data.selected[0]?.id;

const {data: productData} = await query(
  `query GetProduct($id: ID!) {
    product(id: $id) {
      title
      totalInventory
      status
    }
  }`,
  {variables: {id: productId}},
);

console.log('Product:', productData.product);

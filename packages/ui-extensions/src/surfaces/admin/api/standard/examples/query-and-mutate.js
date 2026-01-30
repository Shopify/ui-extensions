const {query} = useApi(TARGET);

const {data: productsData} = await query(
  `query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          totalInventory
        }
      }
    }
  }`,
);

const productId = productsData.products.edges[0].node.id;

const {data: updateData} = await query(
  `mutation UpdateProduct($id: ID!, $input: ProductInput!) {
    productUpdate(id: $id, product: $input) {
      product {
        id
        tags
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
      id: productId,
      input: {tags: ['processed', 'reviewed']},
    },
  },
);

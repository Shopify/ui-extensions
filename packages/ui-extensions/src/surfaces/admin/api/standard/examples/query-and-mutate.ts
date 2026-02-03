import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {query} = api;

    query(
      `query GetProducts {
        products(first: 10) {
          edges {
            node {
              id
              title
            }
          }
        }
      }`,
    ).then(({data: productsData}) => {
      const firstProduct = productsData.products.edges[0]?.node;

      if (firstProduct) {
        return query(
          `mutation UpdateProduct($id: ID!, $input: ProductInput!) {
            productUpdate(id: $id, product: $input) {
              product {
                id
                tags
              }
            }
          }`,
          {
            variables: {
              id: firstProduct.id,
              input: {tags: ['processed', 'reviewed']},
            },
          },
        );
      }
    });
  },
);

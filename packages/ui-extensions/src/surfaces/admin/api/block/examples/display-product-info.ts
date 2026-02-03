import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data, query} = api;

    const productId = data.selected[0]?.id;

    query(
      `query GetProduct($id: ID!) {
        product(id: $id) {
          title
          totalInventory
          status
        }
      }`,
      {variables: {id: productId}},
    ).then(({data: productData}) => {
      const product = productData.product;
      console.log('Product:', product.title);
      console.log('Inventory:', product.totalInventory);
      console.log('Status:', product.status);
    });
  },
);

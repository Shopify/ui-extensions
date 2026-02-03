import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.configuration.render',
  (root, api) => {
    const {data, query} = api;

    const productId = data.selected[0]?.id;

    query(
      `query GetProductBundle($id: ID!) {
        product(id: $id) {
          metafield(namespace: "bundle", key: "components") {
            value
          }
        }
      }`,
      {variables: {id: productId}},
    ).then(({data: productData}) => {
      const components = JSON.parse(productData.product.metafield?.value || '[]');
      console.log('Bundle components:', components);
    });
  },
);

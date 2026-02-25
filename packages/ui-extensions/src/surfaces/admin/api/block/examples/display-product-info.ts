import {extension, Text, ProgressIndicator} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data, query} = api;

    const productId = data.selected[0]?.id;
    const spinner = root.createComponent(ProgressIndicator);
    root.appendChild(spinner);

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
      
      root.removeChild(spinner);

      const titleText = root.createComponent(Text, {}, `Title: ${product.title}`);
      const inventoryText = root.createComponent(Text, {}, `Inventory: ${product.totalInventory}`);
      const statusText = root.createComponent(Text, {}, `Status: ${product.status}`);

      root.appendChild(titleText);
      root.appendChild(inventoryText);
      root.appendChild(statusText);
    });
  },
);

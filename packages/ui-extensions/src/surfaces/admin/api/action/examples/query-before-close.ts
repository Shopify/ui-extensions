import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, query, close} = api;

    const productId = data.selected[0]?.id;

    const text = root.createComponent(Text, {}, 'Ready to fetch product details');

    const button = root.createComponent(Button, {
      title: 'Fetch and Close',
      onPress: async () => {
        const {data: result} = await query(
          `query GetProduct($id: ID!) {
            product(id: $id) {
              title
              totalInventory
            }
          }`,
          {variables: {id: productId}},
        );

        console.log(
          `Product: ${result.product.title}, Inventory: ${result.product.totalInventory}`,
        );
        close();
      },
    });

    root.appendChild(text);
    root.appendChild(button);
  },
);

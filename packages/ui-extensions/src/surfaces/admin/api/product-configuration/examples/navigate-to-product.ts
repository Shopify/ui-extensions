import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.configuration.render',
  (root, api) => {
    const {data, query, navigation} = api;

    const productId = data.selected[0]?.id;
    const loading = root.createComponent(Text, {}, 'Loading...');
    root.appendChild(loading);

    query(
      `query GetProduct($id: ID!) {
        product(id: $id) {
          title
        }
      }`,
      {variables: {id: productId}},
    ).then(({data: result}) => {
      root.removeChild(loading);

      const title = root.createComponent(
        Text,
        {},
        `Current product: ${result.product.title}`,
      );

      const button = root.createComponent(Button, {
        title: 'View in admin',
        onPress: () => {
          navigation.navigate(
            `shopify:admin/products/${productId.split('/').pop()}`,
          );
        },
      });

      root.appendChild(title);
      root.appendChild(button);
    });
  },
);

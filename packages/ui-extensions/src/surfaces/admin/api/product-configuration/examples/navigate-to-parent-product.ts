import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-variant-details.configuration.render',
  (root, api) => {
    const {data, query, navigation} = api;

    const loadParent = async () => {
      const variantId = data.selected[0]?.id;

      const {data: parentData} = await query(
        `query GetParentProduct($id: ID!) {
          productVariant(id: $id) {
            product {
              id
              title
            }
          }
        }`,
        {variables: {id: variantId}},
      );

      const product = parentData.productVariant.product;

      const titleText = root.createComponent(Text, {}, `Parent: ${product.title}`);
      const navButton = root.createComponent(Button, {
        title: 'View Parent Product',
        onPress: () => {
          navigation.navigate(`shopify:admin/products/${product.id.split('/').pop()}`);
        },
      });

      root.appendChild(titleText);
      root.appendChild(navButton);
    };

    loadParent();
  },
);

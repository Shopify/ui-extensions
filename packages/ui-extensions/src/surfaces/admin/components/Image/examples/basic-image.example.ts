import {extension, Image, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  async (root, api) => {
    const {data, query} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack);

    const result = await query(
      `query Product($id: ID!) {
        product(id: $id) {
          title
          featuredImage { url altText }
        }
      }`,
      {variables: {id: productId}},
    );

    const product = result?.data?.product;

    if (product?.featuredImage) {
      const image = root.createComponent(Image, {
        source: product.featuredImage.url,
        accessibilityLabel: product.featuredImage.altText || product.title,
      });

      const caption = root.createComponent(
        Text,
        {},
        product.title,
      );

      stack.appendChild(image);
      stack.appendChild(caption);
    }

    root.appendChild(stack);
  },
);

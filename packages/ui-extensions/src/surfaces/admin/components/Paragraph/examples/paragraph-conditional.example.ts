import {extension, Paragraph, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  async (root, api) => {
    const {data, query} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack);

    const result = await query(
      `query Product($id: ID!) {
        product(id: $id) {
          status
          title
        }
      }`,
      {variables: {id: productId}},
    );

    const product = result?.data?.product;

    if (product?.status === 'DRAFT') {
      const helpText = root.createComponent(Paragraph);

      const message = root.createComponent(
        Text,
        {},
        `"${product.title}" is currently in draft status. Complete the product description, add at least one image, and set pricing before publishing to your storefront.`,
      );

      helpText.appendChild(message);
      stack.appendChild(helpText);
    }

    root.appendChild(stack);
  },
);

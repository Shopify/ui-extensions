import {extension, TextArea, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  async (root, api) => {
    const {data, query} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Shipping instructions',
    );

    const result = await query(
      `query Product($id: ID!) {
        product(id: $id) {
          metafield(namespace: "custom", key: "shipping_instructions") { value }
        }
      }`,
      {variables: {id: productId}},
    );

    const existing = result?.data?.product?.metafield?.value || '';

    const field = root.createComponent(TextArea, {
      label: 'Special handling instructions',
      name: 'shippingInstructions',
      rows: 3,
      value: existing,
      readOnly: true,
    });

    stack.appendChild(heading);
    stack.appendChild(field);
    root.appendChild(stack);
  },
);

import {extension, ProgressIndicator, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  async (root, api) => {
    const {data, query} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack);

    const loader = root.createComponent(ProgressIndicator, {
      size: 'small-200',
      accessibilityLabel: 'Loading product data',
    });
    stack.appendChild(loader);
    root.appendChild(stack);

    const result = await query(
      `query Product($id: ID!) {
        product(id: $id) { title totalInventory }
      }`,
      {variables: {id: productId}},
    );

    stack.removeChild(loader);

    const product = result?.data?.product;
    if (product) {
      const title = root.createComponent(
        Text,
        {fontWeight: 'bold'},
        product.title,
      );
      const inventory = root.createComponent(
        Text,
        {},
        `Total inventory: ${product.totalInventory} units`,
      );
      stack.appendChild(title);
      stack.appendChild(inventory);
    }
  },
);

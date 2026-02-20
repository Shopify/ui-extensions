import {extension, AdminBlock, Text, ProgressIndicator, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  async (root, api) => {
    const {data, query} = api;
    const productId = data.selected[0]?.id;

    const content = root.createComponent(BlockStack, {gap: true});
    const loader = root.createComponent(ProgressIndicator, {
      size: 'small-200',
      accessibilityLabel: 'Loading analytics',
    });
    content.appendChild(loader);

    const block = root.createComponent(AdminBlock, {
      title: 'Product analytics',
    });
    block.appendChild(content);
    root.appendChild(block);

    const result = await query(
      `query Product($id: ID!) {
        product(id: $id) { title totalInventory totalVariants }
      }`,
      {variables: {id: productId}},
    );

    content.removeChild(loader);

    const product = result?.data?.product;
    if (product) {
      const title = root.createComponent(Text, {fontWeight: 'bold'}, product.title);
      const variants = root.createComponent(Text, {}, `Variants: ${product.totalVariants}`);
      const inventory = root.createComponent(Text, {}, `Total inventory: ${product.totalInventory}`);
      content.appendChild(title);
      content.appendChild(variants);
      content.appendChild(inventory);
    }
  },
);

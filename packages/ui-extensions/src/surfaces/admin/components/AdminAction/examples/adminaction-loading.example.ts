import {extension, AdminAction, Button, Text, ProgressIndicator, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  async (root, api) => {
    const {data, close, query} = api;
    const productId = data.selected[0]?.id;

    const content = root.createComponent(BlockStack, {gap: true});

    const loader = root.createComponent(ProgressIndicator, {
      size: 'small-200',
      accessibilityLabel: 'Loading product details',
    });
    content.appendChild(loader);

    const primaryAction = root.createComponent(
      Button,
      {onPress: () => close()},
      'Done',
    );

    const action = root.createComponent(AdminAction, {
      title: 'Product details',
      primaryAction,
    });
    action.appendChild(content);
    root.appendChild(action);

    const result = await query(
      `query Product($id: ID!) {
        product(id: $id) { title status totalInventory }
      }`,
      {variables: {id: productId}},
    );

    content.removeChild(loader);

    const product = result?.data?.product;
    if (product) {
      const title = root.createComponent(Text, {fontWeight: 'bold'}, product.title);
      const status = root.createComponent(Text, {}, `Status: ${product.status}`);
      const inventory = root.createComponent(Text, {}, `Inventory: ${product.totalInventory} units`);
      content.appendChild(title);
      content.appendChild(status);
      content.appendChild(inventory);
    }
  },
);

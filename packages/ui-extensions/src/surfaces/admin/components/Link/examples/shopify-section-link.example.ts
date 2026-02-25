import {extension, Link, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;
    const numericId = productId?.split('/').pop();

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'Admin navigation');

    const ordersLink = root.createComponent(
      Link,
      {href: 'shopify://admin/orders'},
      'View all orders',
    );

    const inventoryLink = root.createComponent(
      Link,
      {href: `shopify://admin/products/${numericId}/inventory`},
      'Manage inventory',
    );

    const criticalLink = root.createComponent(
      Link,
      {
        href: `shopify://admin/products/${numericId}`,
        tone: 'critical',
      },
      'Edit product (admin)',
    );

    stack.appendChild(heading);
    stack.appendChild(ordersLink);
    stack.appendChild(inventoryLink);
    stack.appendChild(criticalLink);
    root.appendChild(stack);
  },
);

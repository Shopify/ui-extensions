import {extension, InlineStack, Icon, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'Quick stats');

    const stat1 = root.createComponent(InlineStack, {
      gap: true,
      blockAlignment: 'center',
    });
    const icon1 = root.createComponent(Icon, {name: 'OrdersMajor', accessibilityLabel: 'Orders'});
    const text1 = root.createComponent(Text, {}, '142 orders this month');
    stat1.appendChild(icon1);
    stat1.appendChild(text1);

    const stat2 = root.createComponent(InlineStack, {
      gap: true,
      blockAlignment: 'center',
    });
    const icon2 = root.createComponent(Icon, {name: 'InventoryMajor', accessibilityLabel: 'Inventory'});
    const text2 = root.createComponent(Text, {}, '89 units in stock');
    stat2.appendChild(icon2);
    stat2.appendChild(text2);

    stack.appendChild(heading);
    stack.appendChild(stat1);
    stack.appendChild(stat2);
    root.appendChild(stack);
  },
);

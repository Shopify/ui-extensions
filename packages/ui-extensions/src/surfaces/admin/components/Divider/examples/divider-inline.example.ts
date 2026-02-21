import {extension, Divider, Text, InlineStack, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const row = root.createComponent(InlineStack);

    const price = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      '$49.99',
    );

    const divider = root.createComponent(Divider, {
      direction: 'block',
    });

    const sku = root.createComponent(Text, {}, 'SKU: WH-1234');

    row.appendChild(price);
    row.appendChild(divider);
    row.appendChild(sku);

    stack.appendChild(row);
    root.appendChild(stack);
  },
);

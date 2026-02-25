import {extension, Section, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const section = root.createComponent(Section, {
      heading: 'Inventory details',
    });

    const warehouse = root.createComponent(Text, {}, 'Warehouse: East Coast — New York');
    const slot = root.createComponent(Text, {}, 'Storage slot: A-42');
    const quantity = root.createComponent(Text, {}, 'Units in stock: 247');

    section.appendChild(warehouse);
    section.appendChild(slot);
    section.appendChild(quantity);

    stack.appendChild(section);
    root.appendChild(stack);
  },
);

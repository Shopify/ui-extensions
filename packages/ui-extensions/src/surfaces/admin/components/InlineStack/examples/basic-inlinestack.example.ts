import {extension, InlineStack, Text, Badge, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack, {gap: true});

    const row = root.createComponent(InlineStack, {gap: true});
    const label = root.createComponent(Text, {fontWeight: 'bold'}, 'Product:');
    const id = root.createComponent(Text, {}, productId || 'Unknown');
    const badge = root.createComponent(Badge, {tone: 'success'}, 'Active');
    row.appendChild(label);
    row.appendChild(id);
    row.appendChild(badge);

    const metaRow = root.createComponent(InlineStack, {gap: true});
    const skuLabel = root.createComponent(Text, {fontWeight: 'bold'}, 'SKU:');
    const skuValue = root.createComponent(Text, {}, 'WH-1234');
    const weightLabel = root.createComponent(Text, {fontWeight: 'bold'}, 'Weight:');
    const weightValue = root.createComponent(Text, {}, '2.5 kg');
    metaRow.appendChild(skuLabel);
    metaRow.appendChild(skuValue);
    metaRow.appendChild(weightLabel);
    metaRow.appendChild(weightValue);

    stack.appendChild(row);
    stack.appendChild(metaRow);
    root.appendChild(stack);
  },
);

import {extension, AdminPrintAction, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;

    const content = root.createComponent(BlockStack, {gap: true});
    const message = root.createComponent(
      Text,
      {},
      'Generating packing slip for this product...',
    );
    content.appendChild(message);

    const printAction = root.createComponent(AdminPrintAction, {
      src: `https://your-app.com/print/packing-slip?product=${productId}`,
    });
    printAction.appendChild(content);
    root.appendChild(printAction);
  },
);

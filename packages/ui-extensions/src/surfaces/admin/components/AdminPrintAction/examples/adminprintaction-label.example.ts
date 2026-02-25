import {extension, AdminPrintAction, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;
    const numericId = productId?.split('/').pop();

    const content = root.createComponent(BlockStack, {gap: true});
    const message = root.createComponent(
      Text,
      {},
      'Preparing shipping label with warehouse barcode...',
    );
    content.appendChild(message);

    const printAction = root.createComponent(AdminPrintAction, {
      src: `https://your-app.com/print/shipping-label?product=${numericId}&format=4x6`,
    });
    printAction.appendChild(content);
    root.appendChild(printAction);
  },
);

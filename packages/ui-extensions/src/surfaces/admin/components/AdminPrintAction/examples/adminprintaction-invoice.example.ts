import {extension, AdminPrintAction, Text, ProgressIndicator, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;

    const content = root.createComponent(BlockStack, {gap: true});

    const loader = root.createComponent(ProgressIndicator, {
      size: 'small-200',
      accessibilityLabel: 'Generating invoice',
    });

    const message = root.createComponent(
      Text,
      {},
      'Generating wholesale invoice with pricing and tax details...',
    );

    content.appendChild(loader);
    content.appendChild(message);

    const printAction = root.createComponent(AdminPrintAction, {
      src: `https://your-app.com/print/invoice?product=${productId}&type=wholesale`,
    });
    printAction.appendChild(content);
    root.appendChild(printAction);
  },
);

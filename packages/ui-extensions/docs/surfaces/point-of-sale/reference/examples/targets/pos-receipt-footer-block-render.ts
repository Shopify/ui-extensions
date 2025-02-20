import {
  POSReceiptBlock,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.receipt-footer.block.render', (root, api) => {
  const block = root.createComponent(POSReceiptBlock);
  const text = root.createComponent(Text, {}, `Order ID: ${api.order.id}`);

  block.append(text);
  root.append(block);
});

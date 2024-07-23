import {
  POSBlock,
  POSBlockRow,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.purchase.post.block.render',
  (root, api) => {
    const posBlock =
      root.createComponent(POSBlock);

    const posBlockRow =
      root.createComponent(POSBlockRow);

    const text = root.createText('Hello, world!');

    posBlockRow.append(text);
    posBlock.append(posBlockRow);
    root.append(posBlock);
  },
);

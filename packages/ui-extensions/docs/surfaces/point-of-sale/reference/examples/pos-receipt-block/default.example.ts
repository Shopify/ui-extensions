import {
  POSReceiptBlock,
  Image,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.receipt-footer.block.render',
  (root) => {
    const block = root.createComponent(
      POSReceiptBlock,
    );
    const text = root.createComponent(
      Text,
      {},
      'Submission ID: acde070d-8c2c-b0b0-9d8a-162843c10333',
    );
    const image = root.createComponent(Image, {
      src: 'example.png',
      size: 's',
    });

    block.append(text);
    block.append(image);
    root.append(block);
  },
);

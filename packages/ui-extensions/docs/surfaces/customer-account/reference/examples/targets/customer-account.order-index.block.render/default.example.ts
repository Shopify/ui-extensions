import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-index.block.render',
  (root) => {
    const text = root.createText(
      'I am a block extension that renders in the Orders section',
    );
    root.appendChild(text);
  },
);

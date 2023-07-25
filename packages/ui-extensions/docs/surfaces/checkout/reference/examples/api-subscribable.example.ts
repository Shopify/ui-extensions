import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {note}) => {
    const text = root.createText('');
    note.subscribe((value) => {
      if (value) {
        text.updateText(value);
      }
    });
    root.appendChild(text);
  },
);

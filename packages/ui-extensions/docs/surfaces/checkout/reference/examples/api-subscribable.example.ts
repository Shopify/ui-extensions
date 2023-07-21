import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'Checkout::Dynamic::Render',
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

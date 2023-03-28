import {extend} from '@shopify/checkout-ui-extensions';

extend(
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

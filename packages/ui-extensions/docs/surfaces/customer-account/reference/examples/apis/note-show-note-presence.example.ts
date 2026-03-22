import {
  extension,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const note = api.note.current;

    root.appendChild(
      root.createComponent(
        Text,
        {appearance: note ? 'success' : 'subdued'},
        note
          ? 'A note was included with this order.'
          : 'No note was included with this order.',
      ),
    );
  },
);

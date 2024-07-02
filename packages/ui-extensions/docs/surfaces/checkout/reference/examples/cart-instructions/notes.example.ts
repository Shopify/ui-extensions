import {
  extension,
  Banner,
  Button,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
    if (
      api.instructions.current.notes.canUpdateNote
    ) {
      root.appendChild(
        root.createComponent(
          Button,
          {
            onPress: () =>
              api.applyNoteChange({
                type: 'updateNote',
                note: 'Please include a free gift.',
              }),
          },
          'Include a free gift with your order',
        ),
      );
    } else {
      root.appendChild(
        root.createComponent(
          Banner,
          {},
          'Free gifts cannot be added to this order',
        ),
      );
    }
  },
);

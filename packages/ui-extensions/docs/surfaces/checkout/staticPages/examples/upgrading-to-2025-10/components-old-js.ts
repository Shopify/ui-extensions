import {
  extension,
  InlineStack,
  TextField,
  Button,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, _api) => {
    root.replaceChildren(
      root.createComponent(InlineStack, {}, [
        root.createComponent(TextField, {
          label: 'Gift message',
        }),
        root.createComponent(Button, {}, 'Save'),
      ]),
    );
  },
);

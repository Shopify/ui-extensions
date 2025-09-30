import {
  extension,
  InlineStack,
  TextField,
  Button,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
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

import {
  extension,
  InlineStack,
  TextField,
  Button,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, _api) => {
  root.replaceChildren(
    root.createComponent(InlineStack, {}, [
      root.createComponent(TextField, {
        label: 'Gift message',
      }),
      root.createComponent(Button, {}, 'Save'),
    ]),
  );
});

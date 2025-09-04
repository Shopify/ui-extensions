import {
  extension,
  Stack,
  TextField,
  Button,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, _api) => {
  root.replaceChildren(
    root.createComponent(Stack, {direction: 'inline', gap: '200'}, [
      root.createComponent(TextField, {
        label: 'Gift message',
      }),
      root.createComponent(Button, {title: 'Save', variant: 'primary'}),
    ]),
  );
});

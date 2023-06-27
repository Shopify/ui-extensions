import {
  extension,
  TextField,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const textField = root.createComponent(TextField, {
      label: 'Name',
      name: 'name',
    });

    root.appendChild(textField);
  },
);

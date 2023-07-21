import {extension, TextField} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'Last name',
  });

  root.appendChild(textfield);
});

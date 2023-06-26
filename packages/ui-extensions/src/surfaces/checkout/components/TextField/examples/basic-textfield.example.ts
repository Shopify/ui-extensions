import {extension, TextField} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'Last name',
  });

  root.appendChild(textfield);
});

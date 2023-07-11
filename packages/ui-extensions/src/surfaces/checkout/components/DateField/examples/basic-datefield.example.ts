import {extension, DateField} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const datefield = root.createComponent(DateField, {
    label: 'Select a date',
  });

  root.appendChild(datefield);
});

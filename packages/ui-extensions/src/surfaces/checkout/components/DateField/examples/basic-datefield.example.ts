import {extension, DateField} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const datefield = root.createComponent(DateField, {
    label: 'Select a date',
  });

  root.appendChild(datefield);
});

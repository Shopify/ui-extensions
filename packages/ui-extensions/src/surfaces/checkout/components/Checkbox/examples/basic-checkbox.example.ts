import {extension, Checkbox} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const checkbox = root.createComponent(
    Checkbox,
    {id: 'checkbox', name: 'checkbox'},
    'Save this information for next time',
  );

  root.appendChild(checkbox);
});

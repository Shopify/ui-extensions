import {
  extension,
  ToggleButtonGroup,
  ToggleButton,
} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const toggleButtonGroup = root.createComponent(
    ToggleButtonGroup,
    {
      value: 'none',
      onChange: (value) => {
        console.log(`onChange event with value: ${value}`);
      },
    },
    [root.createComponent(ToggleButton, {id: 'none'}, 'None')],
  );

  root.appendChild(toggleButtonGroup);
});

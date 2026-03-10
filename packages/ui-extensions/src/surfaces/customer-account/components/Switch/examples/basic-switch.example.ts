import {extension, Switch} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const baseSwitch = root.createComponent(Switch, {
    accessibilityLabel: 'my-switch',
  });

  root.appendChild(baseSwitch);
});

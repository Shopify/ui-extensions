import {extension, Spinner} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const spinner = root.createComponent(Spinner);

  root.appendChild(spinner);
});

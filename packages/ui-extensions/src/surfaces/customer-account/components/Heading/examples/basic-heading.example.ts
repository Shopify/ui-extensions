import {extension, Heading} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const heading = root.createComponent(Heading, undefined, 'Store name');

  root.appendChild(heading);
});

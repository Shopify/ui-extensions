import {extension, Link} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const link = root.createComponent(
    Link,
    {to: 'https://www.shopify.ca/climate/sustainability-fund'},
    'Sustainability fund',
  );

  root.appendChild(link);
});

import {extension, Link} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const link = root.createComponent(
    Link,
    {to: 'https://www.shopify.ca/climate/sustainability-fund'},
    'Sustainability fund',
  );

  root.appendChild(link);
});

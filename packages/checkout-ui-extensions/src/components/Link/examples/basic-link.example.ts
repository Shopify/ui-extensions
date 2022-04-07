import {extend, Link} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const link = root.createComponent(
    Link,
    {
      to: 'https://shopify.com',
    },
    'Shopify',
  );

  root.appendChild(link);
});

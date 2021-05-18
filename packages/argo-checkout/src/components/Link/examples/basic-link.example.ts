import {extend, Link} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const link = root.createComponent(
    Link,
    {
      to: 'https://shopify.com',
    },
    'Shopify',
  );

  root.appendChild(link);
});

import {extend, Link} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const link = root.createComponent(
    Link,
    {
      to: 'https://shopify.com',
    },
    'Shopify',
  );

  root.appendChild(link);
});

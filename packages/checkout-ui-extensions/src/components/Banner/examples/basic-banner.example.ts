import {extend, Banner} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const banner = root.createComponent(Banner, {
    status: 'critical',
    title: 'This is an error message',
  });

  root.appendChild(banner);
});

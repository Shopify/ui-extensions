import {extend, Banner} from '@shopify/argo-post-purchase';

extend('Checkout::Feature::Render', (root) => {
  const banner = root.createComponent(Banner, {
    status: 'critical',
    title: 'This is an error message',
  });

  root.appendChild(banner);
});

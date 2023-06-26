import {extension, Banner} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const banner = root.createComponent(Banner, {
    status: 'critical',
    title:
      'Your payment details couldn’t be verified. Check your card details and try again.',
  });

  root.appendChild(banner);
});

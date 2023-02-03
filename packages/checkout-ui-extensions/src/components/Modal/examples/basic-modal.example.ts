import {extend, Link, Modal, TextBlock} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const modalFragment = root.createFragment();
  const modal = root.createComponent(
    Modal,
    {title: 'Return policy', padding: true},
    [
      root.createComponent(
        TextBlock,
        undefined,
        'We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.',
      ),
      root.createComponent(
        TextBlock,
        undefined,
        'To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.',
      ),
    ],
  );
  modalFragment.appendChild(modal);
  const link = root.createComponent(
    Link,
    {overlay: modalFragment},
    'Return policy',
  );

  root.appendChild(link);
});

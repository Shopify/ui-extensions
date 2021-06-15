import {extend, Radio} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const radio = root.createComponent(
    Radio,
    {id: 'radio', name: 'radio'},
    'I want this choice',
  );

  root.appendChild(radio);
});
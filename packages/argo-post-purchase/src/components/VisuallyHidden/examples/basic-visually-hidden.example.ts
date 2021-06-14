import {extend, VisuallyHidden} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const visuallyHidden = root.createComponent(
    VisuallyHidden,
    undefined,
    'Visually hidden content although available to assistive technology',
  );

  root.appendChild(visuallyHidden);
});

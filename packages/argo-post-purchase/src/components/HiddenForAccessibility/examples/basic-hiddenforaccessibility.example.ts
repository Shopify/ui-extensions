import {extend, HiddenForAccessibility} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const hiddenForA11y = root.createComponent(
    HiddenForAccessibility,
    undefined,
    'Purely decorative content',
  );

  root.appendChild(hiddenForA11y);
});

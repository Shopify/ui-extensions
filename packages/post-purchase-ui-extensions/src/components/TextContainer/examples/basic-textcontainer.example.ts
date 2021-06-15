import {extend, TextBlock, TextContainer} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const textContainer = root.createComponent(TextContainer, undefined, [
    root.createComponent(TextBlock, undefined, 'TextBlock'),
    root.createComponent(TextBlock, undefined, 'TextBlock'),
    root.createComponent(TextBlock, undefined, 'TextBlock'),
  ]);

  root.appendChild(textContainer);
});

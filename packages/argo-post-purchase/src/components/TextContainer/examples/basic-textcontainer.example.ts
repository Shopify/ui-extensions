import {extend, TextBlock, TextContainer} from '@shopify/argo-post-purchase';

extend('Checkout::Feature::Render', (root) => {
  const textContainer = root.createComponent(TextContainer, undefined, [
    root.createComponent(TextBlock, undefined, 'TextBlock'),
    root.createComponent(TextBlock, undefined, 'TextBlock'),
    root.createComponent(TextBlock, undefined, 'TextBlock'),
  ]);

  root.appendChild(textContainer);
});

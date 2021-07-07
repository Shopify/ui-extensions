import {extend, TextBlock} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const textBlock = root.createComponent(TextBlock, undefined, 'TextBlock');

  root.appendChild(textBlock);
  root.mount();
});

import { extend, TextBlock } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var textBlock = root.createComponent(TextBlock, {
    size: 'small',
    variation: 'subdued'
  }, 'TextBlock');
  root.appendChild(textBlock);
  root.mount();
});
import {extension, TextBlock} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const textBlock = root.createComponent(TextBlock, {size: 'small', variation: 'subdued'}, 'TextBlock');

  root.appendChild(textBlock);
  root.mount();
});

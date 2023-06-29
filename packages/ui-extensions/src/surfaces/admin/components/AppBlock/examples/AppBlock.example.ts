import {extension, AppBlock, Button} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const appBlock = root.createComponent(AppBlock, {
    title: 'My App Block',
    subtitle: '',
  }, '5 items active');

  root.appendChild(appBlock);
  root.mount();
});

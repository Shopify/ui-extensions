import {extension, Spinner} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const spinner = root.createComponent(Spinner);
  root.appendChild(spinner);

  setTimeout(() => {
    root.removeChild(spinner);
  }, 2000);

  root.mount();
});

import {extend, Spinner} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const spinner = root.createComponent(Spinner);
  root.appendChild(spinner);

  setTimeout(() => {
    root.removeChild(spinner);
  }, 2000);

  root.mount();
});

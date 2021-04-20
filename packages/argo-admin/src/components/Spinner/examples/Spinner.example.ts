import {extend, Spinner} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const spinner = root.createComponent(Spinner);
  root.appendChild(spinner);

  setTimeout(() => {
    root.removeChild(spinner);
  }, 2000);

  root.mount();
});

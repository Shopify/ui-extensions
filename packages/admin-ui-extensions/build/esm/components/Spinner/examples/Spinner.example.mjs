import { extend, Spinner } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var spinner = root.createComponent(Spinner);
  root.appendChild(spinner);
  setTimeout(function () {
    root.removeChild(spinner);
  }, 2000);
  root.mount();
});
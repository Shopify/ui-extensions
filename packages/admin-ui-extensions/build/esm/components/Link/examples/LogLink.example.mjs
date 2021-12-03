import { extend, Link } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var logLink = root.createComponent(Link, {
    onPress: function onPress() {
      return console.log('I was pressed');
    }
  });
  logLink.appendChild('I don’t do much.');
  root.appendChild(logLink);
  root.mount();
});
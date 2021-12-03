import { extend, Checkbox } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var checkbox = root.createComponent(Checkbox, {
    label: 'Opt in to something cool',
    checked: true,
    onChange: function onChange() {
      return console.log('Checked');
    }
  });
  root.appendChild(checkbox);
  root.mount();
});
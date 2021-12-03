import { extend, Bookend, TextField, Button } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var bookend = root.createComponent(Bookend, {
    trailing: true
  }, [root.createComponent(TextField, {
    label: 'Discount'
  }), root.createComponent(Button, {
    plain: true
  }, 'Apply')]);
  root.appendChild(bookend);
});
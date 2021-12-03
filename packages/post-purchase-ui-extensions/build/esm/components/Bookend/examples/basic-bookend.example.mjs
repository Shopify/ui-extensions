import { extend, Bookend, TextField, Button } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var bookend = root.createComponent(Bookend, {
    trailing: true
  }, [root.createComponent(TextField, {
    label: 'Discount'
  }), root.createComponent(Button, {
    plain: true
  }, 'Apply')]);
  root.appendChild(bookend);
});
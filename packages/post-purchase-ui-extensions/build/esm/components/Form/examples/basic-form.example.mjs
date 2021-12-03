import { extend, Form, Button } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var form = root.createComponent(Form, {
    // eslint-disable-next-line no-console
    onSubmit: function onSubmit() {
      return console.log('Submitted!');
    }
  }, [root.createComponent(Button, {
    submit: true
  }, 'Submit')]);
  root.appendChild(form);
});
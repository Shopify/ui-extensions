import { extend, ButtonGroup, Button } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var buttonGroup = root.createComponent(ButtonGroup, undefined, [root.createComponent(Button, undefined, 'Cancel'), root.createComponent(Button, undefined, 'Submit')]);
  root.appendChild(buttonGroup);
});
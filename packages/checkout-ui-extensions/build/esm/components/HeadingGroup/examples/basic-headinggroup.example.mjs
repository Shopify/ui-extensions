import { extend, HeadingGroup, Heading, View } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var headingGroup = root.createComponent(View, undefined, [root.createComponent(Heading, undefined, 'Hi John Doe! (h1)'), root.createComponent(HeadingGroup, undefined, [root.createComponent(Heading, undefined, 'Your account (h2)'), root.createComponent(HeadingGroup, undefined, [root.createComponent(Heading, undefined, 'Change Password (h3)')])])]);
  root.appendChild(headingGroup);
});
import {
  extend,
  HeadingGroup,
  Heading,
  View,
} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const headingGroup = root.createComponent(View, undefined, [
    root.createComponent(Heading, undefined, 'Heading <h1>'),
    root.createComponent(HeadingGroup, undefined, [
      root.createComponent(Heading, undefined, 'Heading <h2>'),
      root.createComponent(HeadingGroup, undefined, [
        root.createComponent(Heading, undefined, 'Heading <h3>'),
      ]),
    ]),
  ]);

  root.appendChild(headingGroup);
});

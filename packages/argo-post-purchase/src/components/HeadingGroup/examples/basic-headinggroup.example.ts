import {extend, HeadingGroup, Heading, View} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const headingGroup = root.createComponent(View, undefined, [
    root.createComponent(Heading, undefined, 'Hi John Doe! (h1)'),
    root.createComponent(HeadingGroup, undefined, [
      root.createComponent(Heading, undefined, 'Your account (h2)'),
      root.createComponent(HeadingGroup, undefined, [
        root.createComponent(Heading, undefined, 'Change Password (h3)'),
      ]),
    ]),
  ]);

  root.appendChild(headingGroup);
});

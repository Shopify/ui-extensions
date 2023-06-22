import {
  extension,
  HeadingGroup,
  Heading,
  View,
} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
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

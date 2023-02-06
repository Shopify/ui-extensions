import {Style, View, extend} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const view = root.createComponent(
    View,
    {
      border: 'base',
      padding: 'base',
      maxInlineSize: Style.default(200)
        .when({viewportInlineSize: {min: 'small'}}, 300)
        .when({viewportInlineSize: {min: 'medium'}}, 400)
        .when({viewportInlineSize: {min: 'large'}}, 800),
    },
    'Responsive Content',
  );

  root.appendChild(view);
});

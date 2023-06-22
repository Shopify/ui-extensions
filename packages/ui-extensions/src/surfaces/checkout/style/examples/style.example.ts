import {Style, View, extension} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
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

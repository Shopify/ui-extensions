import {
  extension,
  InlineLayout,
  Switch,
  Text,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const switchLabel = 'Shipping insurance';

    const inlineLayout = root.createComponent(
      InlineLayout,
      {
        padding: 'base',
        borderRadius: 'base',
        border: 'base',
        columns: ['fill', 'auto'],
      },
      [
        root.createComponent(
          Text,
          null,
          switchLabel,
        ),
        root.createComponent(Switch, {
          accessibilityLabel: switchLabel,
        }),
      ],
    );

    root.appendChild(inlineLayout);
  },
);

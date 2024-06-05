import {
  extension,
  BlockStack,
  Grid,
  Progress,
  Text,
  TextBlock,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const label = 'Queue process';

  const progress = root.createComponent(BlockStack, null, [
    root.createComponent(
      Grid,
      {
        columns: ['fill', 'auto'],
      },
      [
        root.createComponent(Text, null, label),
        root.createComponent(
          Text,
          {
            appearance: 'subdued',
          },
          '45% completed',
        ),
      ],
    ),
    root.createComponent(Progress, {
      value: 45,
      max: 100,
      accessibilityLabel: label,
    }),
    root.createComponent(
      TextBlock,
      {
        appearance: 'subdued',
      },
      'Estimated wait time: 4 minutes',
    ),
  ]);

  root.appendChild(progress);
});

import {extension, ProgressIndicator, Text, InlineStack, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Checking eligibility...',
    );

    const row = root.createComponent(InlineStack);

    const indicator = root.createComponent(ProgressIndicator, {
      size: 'small-300',
      tone: 'inherit',
      accessibilityLabel: 'Checking product eligibility',
    });

    const label = root.createComponent(
      Text,
      {},
      'Verifying product meets marketplace requirements',
    );

    row.appendChild(indicator);
    row.appendChild(label);

    stack.appendChild(heading);
    stack.appendChild(row);
    root.appendChild(stack);
  },
);

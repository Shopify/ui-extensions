import {extension, Icon, Text, InlineStack, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Compliance checks',
    );

    const passRow = root.createComponent(InlineStack);
    const passIcon = root.createComponent(Icon, {
      name: 'CircleTickMajor',
      accessibilityLabel: 'Passed',
    });
    const passText = root.createComponent(Text, {}, 'Safety standards — passed');
    passRow.appendChild(passIcon);
    passRow.appendChild(passText);

    const failRow = root.createComponent(InlineStack);
    const failIcon = root.createComponent(Icon, {
      name: 'CircleAlertMajor',
      tone: 'critical',
      accessibilityLabel: 'Failed',
    });
    const failText = root.createComponent(Text, {}, 'Label requirements — action needed');
    failRow.appendChild(failIcon);
    failRow.appendChild(failText);

    stack.appendChild(heading);
    stack.appendChild(passRow);
    stack.appendChild(failRow);
    root.appendChild(stack);
  },
);

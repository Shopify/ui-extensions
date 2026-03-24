import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const lines = api.lines.current;
    const bundleLines = lines.filter(
      (line) => line.lineComponents.length > 0,
    );

    if (bundleLines.length === 0) return;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {emphasis: 'bold'}, 'Bundle details'),
    );

    for (const line of bundleLines) {
      const lineStack = root.createComponent(BlockStack, {});
      lineStack.appendChild(
        root.createComponent(Text, {}, line.merchandise.title),
      );
      for (const component of line.lineComponents) {
        lineStack.appendChild(
          root.createComponent(
            Text,
            {appearance: 'subdued'},
            `↳ ${component.merchandise.title} × ${component.quantity}`,
          ),
        );
      }
      stack.appendChild(lineStack);
    }
    root.appendChild(stack);
  },
);

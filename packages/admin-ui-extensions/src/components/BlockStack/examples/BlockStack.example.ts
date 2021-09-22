import {extend, BlockStack, Text} from '@shopify/admin-ui-extensions';

function buildStackText(root) {
  const text = root.createComponent(Text);
  text.appendChild('Items to stack');
  return text;
}

extend('Playground', (root) => {
  const blockStack = root.createComponent(BlockStack, {
    inlineAlignment: 'center',
    spacing: 'loose',
  });

  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));

  root.appendChild(blockStack);

  root.mount();
});
